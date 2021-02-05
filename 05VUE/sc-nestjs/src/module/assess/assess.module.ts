import { Module } from '@nestjs/common'
import { AssessService } from './assess.service'
import { AssessController } from './assess.controller'
import { OrderModule } from '../order/order.module'

@Module({
    imports: [OrderModule],
    providers: [AssessService],
    controllers: [AssessController],
})
export class AssessModule {}
