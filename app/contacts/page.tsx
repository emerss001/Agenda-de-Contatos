"use server";

import FormContact from "@/components/form-contact";

const createContact = () => {
  return (
    <>
      <div className="justify-center grid space-y-3">
        <div className="items-center space-y-3 justify-center grid">
          <h1 className="text-5xl">Agenda</h1>
          <h3>Preencha os campos para criar um novo contato.</h3>
        </div>
      </div>
      {/* <Alert
        variant="destructive"
        className="w-[50rem] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
      >
        <AlertCircle className="h-4 w-4"></AlertCircle>
        <AlertTitle>Erro:</AlertTitle>
        <AlertDescription>Aqui fala o erro que aconteceu</AlertDescription>
      </Alert> */}

      <FormContact />
    </>
  );
};

export default createContact;
