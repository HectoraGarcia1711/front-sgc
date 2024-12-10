import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ErrorDetail from "./ErrorDetail";
import Home from "./Home";
import Documentos from "../SGC/Nivel3/Documentos";
import InterfaceLogin from "../InicioSecion/interfaceLogin";
import PrivateRoute from "./PrivateRoute";
import ListadoDocumento from "../SGC/Nivel3/Documentos/ListadoMaestroDocumentos/ListadoDocumento";
import InformeRevisionDirecciont from "../SGC/Nivel3/Documentos/InformeRevisionDireccion/InformeRevisionDirecciont";
import ListadoDistribucionDocumentos from "../SGC/Nivel3/Documentos/ListadoDistribucionDocumentos/ListadoDistribucionDocumentos";
import SeguimientoAccMeCoPre from "../SGC/Nivel3/Documentos/SeguimientoAccionesMejoraCorrectivaPreventiva/SeguimientoAccMeCoPre";
import ControlDocumentosExternos from "../SGC/Nivel3/Documentos/ControlDocumentosExternos/ControlDocumentosExternos";
import MinutaReunion from "../SGC/Nivel3/Documentos/MinutaReunion/MinutaReunion";
import GraficaBSC from "../SGC/Nivel3/Graficas/BalanceScoreCardGrafica/GraficaBSC";
import BalanceScoreCard from "../SGC/Nivel3/Documentos/BalanceScoreCard/BalanceScoreCard";
import ListaVerificacion from "../SGC/Nivel3/Documentos/ListaVerificacion/ListaVerificacion";
import Planauditorias from "../SGC/Nivel3/Documentos/PlanAuditorias/Planauditorias";
import ListaDeAsistencia from "../SGC/Nivel3/Documentos/ListaDeAsistencia/ListaDeAsistencia";
import ReporteAuditoria from "../SGC/Nivel3/Documentos/ReporteAuditoria/ReporteAuditoria";
import MejoraContinua from "../SGC/Nivel3/Documentos/MejoraContinua/MejoraContinua";
import SolicitudPersonal from "../SGC/Nivel3/Documentos/SolicitudPersonal/SolicitudPersonal";
import Proceso from "../SGC/Nivel2/Proceso";
import DNC from "../SGC/Nivel3/Documentos/DetecionNecesidadesCapacitacion/DNC";
import ProgramaAnualCapacitacion from "../SGC/Nivel3/Documentos/ProgramaAnualCapacitacion/ProgramaAnualCapacitacion";
import ConstanciaInduccion from "../SGC/Nivel3/Documentos/ConstanciaInduccion/ConstanciaInduccion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <InterfaceLogin />,
  },
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    errorElement: (
      <Layout>
        <ErrorDetail />
      </Layout>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      //Rutas del Menu
      {
        path: "FiloOrganizacional",
        element: <>Filosofia Organizacional</>,
      },
      {
        path: "EstOrganizacional",
        element: <>estructura Organizacional</>,
      },
      {
        path: "Manuales",
        element: <>Manuales</>,
      },
      {
        path: "Procesos",
        element: <Proceso />,
      },

      //Rutas Para los formatos
      {
        path: "Formatos",
        element: <Documentos />,
        children: [
          {
            index: true,
            element: <>Bienvenido a Formatos</>,
          },
          {
            path: "ListadoMaestroDocumentos",
            element: <ListadoDocumento />,
          },
          {
            path: "InformeDeRevisionPorLaDireccion",
            element: <InformeRevisionDirecciont />,
          },
          {
            path: "ListadoDistribucionDocumentos",
            element: <ListadoDistribucionDocumentos />,
          },
          {
            path: "SeguimientoAccionesMejoraCcorrectivasPreventivas",
            element: <SeguimientoAccMeCoPre />,
          },
          {
            path: "ControlDeDocumentosExternos",
            element: <ControlDocumentosExternos />,
          },
          {
            path: "MinutaReunion",
            element: <MinutaReunion />,
          },
          {
            path: "BalanceScoreCard",
            element: <BalanceScoreCard />,
          },
          {
            path: "ListadoVerificacion",
            element: <ListaVerificacion />,
          },
          {
            path: "PlanAuditorias",
            element: <Planauditorias />,
          },
          {
            path: "ListaDeAsistencia",
            element: <ListaDeAsistencia />,
          },
          {
            path: "ReporteAuditoria",
            element: <ReporteAuditoria />,
          },
          {
            path: "MejoraContinua",
            element: <MejoraContinua />,
          },
          {
            path: "SolicitudPersonal",
            element: <SolicitudPersonal />,
          },
          {
            path: "DeteccionNecesidadesCapacitacion",
            element: <DNC />,
          },
          {
            path: "ProgramaAnualCapacitacion",
            element: <ProgramaAnualCapacitacion />,
          },
          {
            path: "ConstanciaInduccion",
            element: <ConstanciaInduccion />,
          },
        ],
      },
      //fin de rutas de formularios
      {
        path: "Graficas",
        element: <GraficaBSC />,
      },
      {
        path: "Anexos",
        element: <>Anexos</>,
      },
      {
        path: "Instructivos",
        element: <>Instructivos</>,
      },
    ],
  },
]);

export default router;
