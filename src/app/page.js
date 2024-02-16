import Form from "@/components/employees/addemp/documents/Form";
import ProfessionalInfo from "@/components/employees/addemp/documents/ProfessionalInfo";
import Review from "@/components/employees/addemp/review/Review";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
  <Form/>
  <Review/>
        </main>
  );
}
