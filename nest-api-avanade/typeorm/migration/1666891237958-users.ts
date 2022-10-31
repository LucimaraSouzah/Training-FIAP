import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { idColumn } from '../utils/idColumn';
import { varcharColumn } from '../utils/varCharColumn';

export class users1666891237958 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          idColumn('id'),
          varcharColumn('name', '255', false),
          varcharColumn('email', '255', false),
          varcharColumn('password', '255', false),
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
