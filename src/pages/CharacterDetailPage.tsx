// src/pages/CharacterDetailPage.tsx
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { z } from "zod";
import type { Character } from "../types/character";
import { fetchCharacter } from "../services/characterApi";

// ── Schéma Zod ───────────────────────────────────────────────────────────────

const reviewSchema = z.object({
  reviewer: z.string().min(3, "Minimum 3 caractères"),
  email: z.string().email("Email invalide"),
  rating: z
    .number({ invalid_type_error: "Note obligatoire" })
    .min(1, "Minimum 1")
    .max(5, "Maximum 5"),
  comment: z.string().max(200, "Maximum 200 caractères").optional(),
});

type ReviewForm = z.infer<typeof reviewSchema>;

const initialValues: ReviewForm = {
  reviewer: "",
  email: "",
  rating: 1,
  comment: "",
};

// ── Composant ────────────────────────────────────────────────────────────────

function CharacterDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [submittedValues, setSubmittedValues] = useState<ReviewForm | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError("");
    fetchCharacter(id)
      .then(setCharacter)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  const handleSubmit = (values: ReviewForm, { resetForm }: any) => {
    setSubmittedValues(values);
    resetForm();
    dialogRef.current?.showModal();
  };

  const statusColor =
    character?.status === "Alive" ? "#4ade80" :
    character?.status === "Dead" ? "#f87171" : "#94a3b8";

  if (loading) return <p className="state-msg">Chargement…</p>;
  if (error) return <p className="state-msg error">{error}</p>;
  if (!character) return null;

  return (
    <main className="detail">
      {/* ── Infos personnage ── */}
      <div className="detail-card">
        <img src={character.image} alt={character.name} className="detail-img" />
        <div className="detail-info">
          <h1 className="detail-name">{character.name}</h1>
          <p className="detail-status" style={{ color: statusColor }}>
            ● {character.status}
          </p>
          <p><span>Espèce :</span> {character.species}</p>
          <p><span>Genre :</span> {character.gender}</p>
          <p><span>Origine :</span> {character.origin.name}</p>
          <p><span>Localisation :</span> {character.location.name}</p>
          <p><span>Épisodes :</span> {character.episode.length}</p>
        </div>
      </div>

      {/* ── Formulaire d'évaluation ── */}
      <section className="review-section">
        <h2>Laisser une note sur ce personnage</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={toFormikValidationSchema(reviewSchema)}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="review-form">
              <div className="form-group">
                <label>Nom de l'évaluateur *</label>
                <Field name="reviewer" placeholder="Votre nom" />
                <ErrorMessage name="reviewer" component="p" className="form-error" />
              </div>

              <div className="form-group">
                <label>Email *</label>
                <Field name="email" type="email" placeholder="vous@example.com" />
                <ErrorMessage name="email" component="p" className="form-error" />
              </div>

              <div className="form-group">
                <label>Note * (1 à 5)</label>
                <Field name="rating" type="number" min={1} max={5} />
                <ErrorMessage name="rating" component="p" className="form-error" />
              </div>

              <div className="form-group">
                <label>Commentaire (optionnel, max 200 car.)</label>
                <Field name="comment" as="textarea" placeholder="Votre avis..." />
                <ErrorMessage name="comment" component="p" className="form-error" />
              </div>

              <button type="submit" disabled={isSubmitting}>
                Valider
              </button>
            </Form>
          )}
        </Formik>
      </section>

      {/* ── Dialog modale ── */}
      <dialog ref={dialogRef} className="review-dialog">
        {submittedValues && (
          <>
            <h3>✅ Évaluation enregistrée</h3>
            <p><span>Nom :</span> {submittedValues.reviewer}</p>
            <p><span>Email :</span> {submittedValues.email}</p>
            <p><span>Note :</span> {submittedValues.rating} / 5</p>
            {submittedValues.comment && (
              <p><span>Commentaire :</span> {submittedValues.comment}</p>
            )}
            <button onClick={() => dialogRef.current?.close()}>Fermer</button>
          </>
        )}
      </dialog>
    </main>
  );
}

export default CharacterDetailPage;
