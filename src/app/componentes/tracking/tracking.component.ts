import { Component, OnInit } from '@angular/core';
import { TrackingService } from 'src/app/servicios/tracking.service';

@Component({
    selector: 'app-tracking',
    templateUrl: './tracking.component.html',
    styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {

    tracking: any;
    correcto: string = 'false';
    mensaje: string = '';

    constructor(private trackingService: TrackingService) { }

    ngOnInit() { }

    buscarPorCodigo(code: HTMLInputElement): void{
        if(code.value.length>=5 && code.value.length<=50){
            this.trackingService.searchByCodeTracking(code.value).subscribe(
                response => {
                    this.tracking = response as any;
                    this.tracking = this.tracking.data;
                    this.correcto = response.success;
                    this.mensaje = response.mensaje;
                }
            );
        }else{
            this.mensaje = '* Código no valido / Código muy corto';
        }
    }

    dataTest: object = {
        'data': [
            {
                'dest_nombre': 'JOSE LUIS MERCADO',
                'dest_empresa': '',
                'dest_destino': 'ZONA/BARRIO VALLE HERMOSO CALLE/AVENIDA LOS PINOS EDIF. LAS LIEBRES PISO 1 N° 234 REFERENCIA: FRENTE A LA ESCUELA',
                'dest_tipo_persona': '1',
                'dest_multicentro_id': null,
                'dest_zona_barrio': 'VALLE HERMOSO',
                'dest_calle_av': 'LOS PINOS',
                'dest_edificio': 'LAS LIEBRES',
                'dest_piso': '1',
                'dest_nro': '234',
                'dest_referencia': 'FRENTE A LA ESCUELA',
                'dest_celular': '71542321',
                'dest_correo': 'jose@gmail.com',
                'tipo_correspondencia': 'PAQUETE',
                'tipo_entrega': 'ENTREGA DOMICILIARIA',
                'estado': 'REGISTRADO',
                'log_accion': 'REGISTRO CORRESPONDENCIA',
                'fecha_registro': '2019-08-28 11:24:02',
                'peso': '10',
                'origen': 'COCHABAMBA',
                'destino': 'LA PAZ'
            },
            {
                'dest_nombre': 'xJOSE LUIS MERCADO',
                'dest_empresa': 'x',
                'dest_destino': 'xZONA/BARRIO VALLE HERMOSO CALLE/AVENIDA LOS PINOS EDIF. LAS LIEBRES PISO 1 N° 234 REFERENCIA: FRENTE A LA ESCUELA',
                'dest_tipo_persona': 'x1',
                'dest_multicentro_id': null,
                'dest_zona_barrio': 'xVALLE HERMOSO',
                'dest_calle_av': 'xLOS PINOS',
                'dest_edificio': 'xLAS LIEBRES',
                'dest_piso': 'x1',
                'dest_nro': 'x234',
                'dest_referencia': 'xFRENTE A LA ESCUELA',
                'dest_celular': 'x71542321',
                'dest_correo': 'xjose@gmail.com',
                'tipo_correspondencia': 'xPAQUETE',
                'tipo_entrega': 'xENTREGA DOMICILIARIA',
                'estado': 'xREGISTRADO',
                'log_accion': 'xREGISTRO CORRESPONDENCIA',
                'fecha_registro': '2019-08-29 12:11:15',
                'peso': '11',
                'origen': 'xCOCHABAMBA',
                'destino': 'xLA PAZ'
            }
        ],
        'success': 'true',
        'mensaje': 'datos historico'
    };

}
