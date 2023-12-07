import { ApiProperty, PickType } from '@nestjs/swagger';
import { Cat } from '../cats.schema';

// PickType을 사용해서 Cat에서 필요한 부분만 보여줄 수 있음
export class ReadOnlyCatDto extends PickType(Cat, ['email', 'name'] as const) {
  @ApiProperty({
    example: '1234',
    description: 'id',
  })
  id: string;
}
