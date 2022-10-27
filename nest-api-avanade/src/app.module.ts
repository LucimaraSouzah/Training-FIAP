import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { LogisticsModule } from './logistics/logistics.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [AuthModule, UsersModule, OrdersModule, LogisticsModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
