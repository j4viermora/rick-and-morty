Este hook se encarga de gestionar las peticones GET y disparar las acciones de manera dinamica recibe

## Recibe 3 parametros el primero 

    Primer endpoint , que podria tomarlo desde el los parametros de url con useParams()
    Seguno el dispatch de la accion
    Tercero el tipo de accion

    Ejemplo:
###     dispath = useDispath() viene de react-redux
###    useGetIinfo( 'api/user', dispath, 'login' );