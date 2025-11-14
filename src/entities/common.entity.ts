import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class CommonEntity {
  @CreateDateColumn({
    name: 'created_at',
    type: 'datetime',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    nullable: true,
    type: 'datetime',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    nullable: true,
    type: 'datetime',
  })
  deletedAt: Date;
}
