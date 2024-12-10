import { SimpleGrid } from "@chakra-ui/react";
import TarjetaDocumento from "./Componentes/TarjetaDocumento";
import { Outlet, useLocation } from "react-router-dom";
import minuta from "../../imgs/Blanco 2.svg";
import logo2 from "../../imgs/Blanco 2.svg";
import logo3 from "../../imgs/Blanco 2.svg";
import logo4 from "../../imgs/Blanco 2.svg";
import logo5 from "../../imgs/Blanco 2.svg";
import logo6 from "../../imgs/Blanco 2.svg";
import logo7 from "../../imgs/Blanco 2.svg";
import listaverificacion from "../../imgs/Blanco 2.svg";
import planAuditoria from "../../imgs/Blanco 2.svg";
import listaAsistencia from "../../imgs/Blanco 2.svg";
import reporteAuditoria from "../../imgs/Blanco 2.svg";
import mejoracontinua from "../../imgs/Blanco 2.svg";
import SolicitudPersonal from "../../imgs/Blanco 2.svg";


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
            img={SolicitudPersonal}
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
