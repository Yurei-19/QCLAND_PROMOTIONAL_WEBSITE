export type TeamMember = {
  name: string
  role: string
  description: string
  image?: string // optional avatar path from public/ (relative to BASE_URL)
}

export const team: TeamMember[] = [
  { name: 'Kristine Joyce G. Quilatis', role: 'Project Manager', description: 'Oversees the project from start to finish, keeping the team organized, on schedule, and aligned with goals.', image: 'The%20Team/Quilatis, Kristine Joyce G.png' },
  { name: 'Remie O. Salamat', role: 'Developer', description: 'Builds and maintains core game features, turning ideas and designs into functional, high-quality code.', image: 'The%20Team/Remie.jpg' },
  { name: 'Luis Troy A. Paraiso', role: 'Lead Developer', description: 'Guides the dev team, sets technical direction, and keeps the codebase efficient, scalable, and reliable.', image: 'The%20Team/Paraiso, Luis Troy.jpg' },
  { name: 'Peter John I. Varca', role: 'Developer', description: 'Leads the promotional website, ensuring creative presentation and clean, effective marketing of the game.', image: 'The%20Team/Peter John I Varca.png' },
  { name: 'Rayn Amberdawn Punsalan', role: 'UI/UX Designer', description: 'Designs intuitive, engaging experiences and polished interfaces that are easy and enjoyable to use.', image: 'The%20Team/PUNSALAN, RAYN AMBERDAWN.PNG' },
  { name: 'Stephanie J. Gomez', role: 'UI/UX Designer', description: 'Designs intuitive, engaging experiences and polished interfaces that are easy and enjoyable to use.', image: 'The%20Team/Gomez_Stephanie.png' },
  { name: 'Marcho G. Villegas', role: 'Developer', description: 'Creates initial game designs, turning early concepts into working, playable assets and features.', image: 'The%20Team/VillegasMarchoG..jpg' },
  { name: 'Gerald P. Magleo', role: 'Technical Writer', description: 'Produces clear, user-friendly documentation and guides to explain complex concepts.', image: 'The%20Team/MAGLEO, GERALD P.png' },
  { name: 'Jhan Bentriz G. Padauan', role: 'Technical Writer', description: 'Produces clear, user-friendly documentation and guides to explain complex concepts.', image: 'The%20Team/Padauan, Jhan Bentriz G.jpg' },
  { name: 'Angeline A. Mendioro', role: 'Technical Writer', description: 'Produces clear, user-friendly documentation and guides to explain complex concepts.', image: 'The%20Team/MENDIORO,ANGELINE A..jpg' },
  { name: 'Geraldine Patron', role: 'Lead Documenter', description: 'Manages all project documentation, keeping information clear, accurate, and easy to access.', image: 'The%20Team/PATRON, GERALDINE.JPG' },
  { name: 'Kent T. Requiroso', role: 'Technical Writer', description: 'Produces clear, user-friendly documentation and guides to explain complex concepts.', image: 'The%20Team/Requiroso, Kent T.jpeg' },
  { name: 'Ryan Cristian O. Dela Cruz', role: 'Technical Writer', description: 'Produces clear, user-friendly documentation and guides to explain complex concepts.', image: 'The%20Team/Dela Cruz, Ryan Cristian, O.jpg' },
]
