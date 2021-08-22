export class Restaurante
{
    constructor
	(
        public id: string,
		public nombre:string,
		public descripcion: string,
		public ciudad: string,
		public urlFoto:string,
		public reservas:Array<any>
    )
	{

	}

}