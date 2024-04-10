import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from '@/components/TopBar';
import { QueryClient, QueryClientProvider } from 'react-query';
import "tailwindcss/tailwind.css";
import ArenaValidationForm from '@/modules/arena/components/form';


const FormularioPage = () => {
    const queryClient = new QueryClient();

    return (
      <>
      <title>Teste Score</title>
       <QueryClientProvider client={queryClient}>
          <Topbar/>
          <div className="min-h-screen max-h-full bg-cover bg-center bg-no-repeat" style={{backgroundImage:"url(/background.jpg)"}}>
          <ArenaValidationForm/>
          </div>
        </QueryClientProvider>
      </>
       
    );
};

export default FormularioPage;