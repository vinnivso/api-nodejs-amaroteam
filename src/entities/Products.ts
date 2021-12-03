export default class Products {
  //Como estou definindo a ID como opcional, logo ele precisa ser o último.
  constructor(
    private name: string,
    private tags: string,
    private id?: string
  ) {}
  //Função que retorna id.
  public getId = (): string | undefined => this.id

  //Função que retorna name.
  public getName = (): string => this.name

  //Função que retorna tags.
  public getTags = (): string => this.tags
}
