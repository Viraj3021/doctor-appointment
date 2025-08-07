const { PrismaClient } = require('@prisma/client')


const prisma = new PrismaClient();

async function main() {
  const existingDoctors = await prisma.doctor.findMany();

  if (existingDoctors.length > 0) {
    console.log('Doctor already broadcasted')
    return; 
    }


  console.log('Seed data inserted successfully:', existingDoctors);
  await prisma.doctor.createMany({
    data: [
      { 
        name: 'Dr. Smith', 
        specialization: 'Cardiologist'

       },
      { 
        name: 'Dr. Jane', 
        specialization: 'Dermatologist' 
      },
      {
        name: 'Dr. Emily', 
        specialization: 'Pediatrician'
      },
    ],
  });

  console.log('Doctors seeded!') //existingDoctors);
}
    
main()
  .catch ((e) => {
    console.error(e);
    process.exit(1);
})
  .finally(async () => {
    await prisma.$disconnect();
  });

