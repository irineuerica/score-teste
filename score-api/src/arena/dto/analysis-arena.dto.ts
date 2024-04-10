import { Transform } from "class-transformer";
import { ArrayMaxSize, ArrayMinSize, IsArray, IsString, Length, MinLength } from "class-validator";

export class AnalysisArenaDto {
    @IsString({message: 'Nome inválido'})
    @MinLength(1, {message: 'Nome inválido'})
    name: string;

    @IsString()
    @Length(15, 20, {message: 'whatsapp inválido'})
    whatsapp: string;

    @IsString()
    @Length(9, 9, {message: 'Cep inválido'})
    zipCode: string;

    @IsArray()
    @ArrayMinSize(3, {message: 'Quantidade de pessoas inválida'})
    @ArrayMaxSize(3, {message: 'Quantidade de pessoas inválida'})
    @Transform(({value})  => {
        return value.map((item) => Number(item))
    })
    peopleCount: number[];

    @IsArray()
    @ArrayMinSize(3, {message: 'Ticket médio inválido'})
    @ArrayMaxSize(3, {message: 'Ticket médio inválido'})
    @Transform(({value})  => {
        return value.map((item) => Number(item))
    })
    ticketAverages: number[];
}

