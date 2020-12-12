export interface Account {
  readonly id: string;
  readonly email: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly deletedAt: Date | undefined;
}

export interface Accounts
  extends Array<{
    readonly id: string;
    readonly email: string;
    readonly createdAt: Date;
  }> {}

export interface Query {
  findById(id: string): Promise<undefined | Account>;
  findByIds(id: string[]): Promise<Accounts>;
  findByEmail(email: string | string[]): Promise<Accounts>;
}