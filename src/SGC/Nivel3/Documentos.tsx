import { SimpleGrid } from "@chakra-ui/react";
import TarjetaDocumento from "./Componentes/TarjetaDocumento";
import { Outlet, useLocation } from "react-router-dom";
import minuta from "../../imgs/Minuta.jpg";
import logo2 from "../../imgs/Imagen1.jpg";
import logo3 from "../../imgs/Imagen2.jpg";
import logo4 from "../../imgs/Imagen3.jpg";
import logo5 from "../../imgs/Imagen4.jpg";
import logo6 from "../../imgs/Imagen5.jpg";
import logo7 from "../../imgs/Imagen6.jpg";
import listaverificacion from "../../imgs/ListaVerificacion.jpg";
import planAuditoria from "../../imgs/PlanAuditorias.jpg";
import listaAsistencia from "../../imgs/ListaAsistencia.jpg";
import reporteAuditoria from "../../imgs/reporteAuditoria.jpg";
import mejoracontinua from "../../imgs/MejoraContinua.jpg";

type Props = {};

const Documentos = (props: Props) => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/home/Formatos" && (
        <SimpleGrid columns={[2, null, 3]} spacing="40px">
          <TarjetaDocumento
            nameDocument="Listado Maestro De Documentos"
            ruta="ListadoMaestroDocumentos"
            img={logo2}
          />
          <TarjetaDocumento
            nameDocument="Informe De Revision Por La Direccion"
            ruta="InformeDeRevisionPorLaDireccion"
            img={logo3}
          />
          <TarjetaDocumento
            nameDocument="Listado De Distribusión De Documentos"
            ruta="ListadoDistribucionDocumentos"
            img={logo4}
          />
          <TarjetaDocumento
            nameDocument="Seguimiento A Acciones De Mejora, Correctivas Y Preventivas"
            ruta="SeguimientoAccionesMejoraCcorrectivasPreventivas"
            img={logo5}
          />
          <TarjetaDocumento
            nameDocument="Control De Documentos Extrenos"
            ruta="ControlDeDocumentosExternos"
            img={logo7}
          />
          <TarjetaDocumento
            nameDocument="Minuta De Reunion"
            ruta="MinutaReunion"
            img={minuta}
          />
          <TarjetaDocumento
            nameDocument="Balance Score Card"
            ruta="BalanceScoreCard"
            img={minuta}
          />
          <TarjetaDocumento
            nameDocument="Lista De Verificación"
            ruta="ListadoVerificacion"
            img={listaverificacion}
          />
          <TarjetaDocumento
            nameDocument="Plan De Auditoría "
            ruta="PlanAuditorias"
            img={planAuditoria}
          />
          <TarjetaDocumento
            nameDocument="Lista De Asistencia"
            ruta="ListaDeAsistencia"
            img={listaAsistencia}
          />
          <TarjetaDocumento
            nameDocument="Reporte De Auditoria"
            ruta="ReporteAuditoria"
            img={reporteAuditoria}
          />
          <TarjetaDocumento
            nameDocument="Mejora Continua"
            ruta="MejoraContinua"
            img={mejoracontinua}
          />
          <TarjetaDocumento
            nameDocument="SOLICITUD DE PERSONAL"
            ruta="SolicitudPersonal"
          />

          <TarjetaDocumento
            nameDocument="DETECCIÓN DE NECESIDADES DE CAPACITACIÓN"
            ruta="DeteccionNecesidadesCapacitacion"
          />

          <TarjetaDocumento
            nameDocument="PROGRAMA ANUAL DE CAPACITACIÓN"
            ruta="ProgramaAnualCapacitacion"
          />
          <TarjetaDocumento
            nameDocument="CONSTANCIA DE INDUCCIÓN"
            ruta="ConstanciaInduccion"
          />
        </SimpleGrid>
      )}
      <Outlet />
    </>
  );
};

export default Documentos;
