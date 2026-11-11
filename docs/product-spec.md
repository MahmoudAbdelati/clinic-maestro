# Product spec: Clinic Maestro

> Scope of this spec: **app v1.0** (small clinic, one branch). Target release: 2027-02-06.
> Status: draft 2 · Author: Mahmoud Abdelati (former doctor) · Last updated: 2026-11-10

## Problem

Small outpatient clinics in Egypt run on paper files, a notebook and WhatsApp. Staff repeat the same work every day, and patients wait longer than they need to.

- **Doctor:** spends 5–10 minutes retaking a medical history that was already taken in earlier visits; searches through the patient's papers for old results; waits 5–7 minutes doing nothing while the nurse takes vitals; handwrites prescriptions that pharmacists struggle to read.
- **Receptionist:** books by phone into a notebook, so double bookings happen; can't see at a glance who has arrived, who is waiting and who is with the doctor.
- **Nurse:** writes vitals on paper that may not reach the doctor before the patient walks in.
- **Owner:** counts cash by hand at the end of the day and has no clear view of how the clinic is doing.

## Users / roles

| Role                             | Cares about                                                                                                                       |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Receptionist (the "maestro")** | Runs the day: bookings, check-in, waiting queue, payments. Needs one screen that shows the whole day.                             |
| **Nurse**                        | Takes vitals quickly and gets them to the doctor before the visit.                                                                |
| **Doctor**                       | Sees everything about the patient in one place, documents the visit, prints a clear prescription.                                 |
| **Owner / admin**                | Sets up the clinic and staff, controls who can do what, sees revenue and the daily cash report. Often the owner is also a doctor. |

Patients do **not** log in to v1.0. Staff use the app for them.

## Main day flow

1. **Setup (one time):** the owner creates the clinic, invites staff with a role, and sets each doctor's weekly hours and slot length.
2. **Booking:** the receptionist finds a free slot and books the patient (new or existing). The system blocks double bookings.
3. **Arrival:** the receptionist checks the patient in, and the patient joins the doctor's waiting queue. A patient in poor condition is marked **urgent** and moves to the top.
4. **Vitals:** while the patient waits, the nurse records vitals. The queue shows "vitals done ✓".
5. **Visit:** the doctor calls the next patient and sees the medical history, past visits and today's vitals (abnormal values flagged). The doctor writes the visit note, the prescription and the follow-up plan, then **signs** the visit, which locks it.
6. **Print:** the prescription prints with the clinic header, in Arabic or English.
7. **Payment:** the receptionist creates the invoice, takes payment (cash, card or wallet; partial payments allowed) and prints a receipt.
8. **Close of day:** the receptionist or owner checks the daily cash report and closes the day.

## User stories (v1.0)

**Receptionist**

- As a receptionist, I want to see every doctor's appointments for today on one screen, coloured by status, so that I can run the waiting room.
- As a receptionist, I want to search patients by name or phone (Arabic or English), so that I find a returning patient in seconds.
- As a receptionist, I want the system to refuse a booking in a slot that is already taken, so that two patients never arrive for the same slot.
- As a receptionist, I want to check a patient in and mark them urgent if needed, so that the doctor sees the right patient next.
- As a receptionist, I want to take full or partial payments and print a receipt, so that billing is accurate and the patient has proof.

**Nurse**

- As a nurse, I want to see the patients waiting for vitals, so that I know who is next.
- As a nurse, I want to record BP, pulse, temperature, SpO₂, weight, height and glucose, with out-of-range values rejected or flagged, so that the doctor gets correct readings.

**Doctor**

- As a doctor, I want to see my own waiting queue with urgent patients first, so that I call the right patient next.
- As a doctor, I want to see the patient's allergies, chronic conditions and current medications, so that I don't retake the history every visit.
- As a doctor, I want to see a timeline of past visits with diagnoses and prescriptions, so that I understand the case quickly.
- As a doctor, I want to see today's vitals with abnormal values highlighted, so that I don't miss a warning sign.
- As a doctor, I want to write a visit note (complaint, examination, diagnosis, plan including labs/imaging requested and follow-up), so that the visit is fully documented.
- As a doctor, I want to write a structured prescription and print it, so that the pharmacist can read it.
- As a doctor, I want to sign a visit so that it can no longer be edited, only amended, so that the medical record stays trustworthy.

**Owner / admin**

- As an owner, I want to invite staff and give each one a role, so that everyone sees only what their job needs.
- As an owner, I want to set each doctor's working hours, slot length and days off, so that bookings only go into real free time.
- As an owner, I want a daily cash report and a dashboard (appointments, waiting count, revenue), so that I can close the day in minutes.

## Out of scope (v1.0)

| Not in v1.0                                                                     | Why                                                                          | When    |
| ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------- |
| Prescription templates / copy a past prescription                               | Keep v1.0 small; plain prescriptions come first                              | v2      |
| Uploading lab and imaging results                                               | Needs secure file storage; for now key results are typed into the visit note | v2      |
| Drug database (doses, side effects, interactions) and medical reference content | Needs a licensed data source and carries medical liability                   | Later   |
| Online payment by patients                                                      | Needs a payment provider and legal/business setup                            | Later   |
| Salaries / payroll                                                              | A separate business tool, needs a well-run clinic first                      | Later   |
| Inventory (supplies, broken devices, low stock)                                 | Real need, but a separate module                                             | Stage 3 |
| Multiple branches / clinic chains                                               | v1.0 is one small clinic                                                     | Stage 3 |
| Patient portal and online self-booking                                          | Staff book for patients in v1.0                                              | Later   |
| WhatsApp/SMS reminders, AI features                                             | Integrations come after the core works                                       | Stage 4 |
| Native mobile app                                                               | The responsive web app works on phones                                       | Later   |

## Success (v1.0)

- A full clinic day runs in the app with no paper: booking → check-in → vitals → visit → prescription → payment → cash report (proven by an end-to-end test).
- A returning patient's history, past visits and today's vitals are visible from the queue in **1 click**.
- Double booking is **impossible** (enforced by the database, proven by a test with two bookings sent at the same time).
- Each role can do only what it is allowed to do, and **no clinic can ever see another clinic's data** (proven by tests).
- Works on a 360 px phone screen, in Arabic and English.
- The live demo uses **fake data only**, never real patients.
