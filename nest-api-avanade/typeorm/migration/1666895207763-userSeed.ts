import { MigrationInterface, QueryRunner } from 'typeorm';

export class userSeed1666895207763 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO users (name, email, password) VALUES ('Lucimara Souza', 'lucimarasouza@gmail.com', '123456')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM users WHERE email = 'lucimarasouza@gmail.com'`,
    );
  }
}
