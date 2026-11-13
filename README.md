# Clinic Maestro

A multi-clinic management web app for small outpatient clinics: appointments, waiting queue, vitals, visits, prescriptions and billing, in Arabic and English.

> 🚧 **Status:** in development, Stage 0 (planning + setup). v1.0 target: February 2027.

## Why

I'm a former doctor. In the clinics I worked in, doctors retook the same medical history every visit, waited for vitals on paper, and handwrote prescriptions pharmacists couldn't read, while reception ran the day from a notebook. Clinic Maestro puts the whole clinic day on one screen, with the receptionist as the "maestro".

## Docs

- [Product spec](docs/product-spec.md): problem, roles, day flow, user stories, scope

## Wireframes

Low-fidelity, mobile-first wireframes of the v1.0 screens. I reviewed every screen as the product owner, from my experience as a doctor. Each image includes my review notes.

[Open the Figma file](https://www.figma.com/design/lT18666VjZ5B9DwCJA9RjT)

| Screen                             | Wireframe                                                               |
| ---------------------------------- | ----------------------------------------------------------------------- |
| Login                              | ![Login](docs/wireframes/01-login.png)                                  |
| Reception: today (phone)           | ![Reception](docs/wireframes/02-reception-phone.png)                    |
| Patient profile: receptionist      | ![Profile, receptionist](docs/wireframes/03a-profile-receptionist.png)  |
| Patient profile: nurse             | ![Profile, nurse](docs/wireframes/03b-profile-nurse.png)                |
| Patient profile: doctor            | ![Profile, doctor](docs/wireframes/03c-profile-doctor.png)              |
| Visit (doctor)                     | ![Visit](docs/wireframes/04-visit.png)                                  |
| Clinic settings (owner)            | ![Settings](docs/wireframes/05-settings.png)                            |
| Prescription: blank paper, English | ![Prescription EN](docs/wireframes/06a-rx-blank-en.png)                 |
| Prescription: letterhead, Arabic   | ![Prescription letterhead AR](docs/wireframes/06b-rx-letterhead-ar.png) |
| Prescription: blank paper, Arabic  | ![Prescription AR](docs/wireframes/06c-rx-blank-ar.png)                 |
| My profile                         | ![My profile](docs/wireframes/07-my-profile.png)                        |

Desktop layouts will be designed later (mobile first).

## Planned stack

Next.js · NestJS · PostgreSQL + Prisma · Turborepo + pnpm · free-tier hosting (Vercel, Render, Neon)

## Data

Demo data is fake. This project never uses real patient data.
