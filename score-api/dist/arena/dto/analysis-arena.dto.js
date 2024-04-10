"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalysisArenaDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class AnalysisArenaDto {
}
exports.AnalysisArenaDto = AnalysisArenaDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Nome inválido' }),
    (0, class_validator_1.MinLength)(1, { message: 'Nome inválido' }),
    __metadata("design:type", String)
], AnalysisArenaDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(15, 20, { message: 'whatsapp inválido' }),
    __metadata("design:type", String)
], AnalysisArenaDto.prototype, "whatsapp", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(9, 9, { message: 'Cep inválido' }),
    __metadata("design:type", String)
], AnalysisArenaDto.prototype, "zipCode", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(3, { message: 'Quantidade de pessoas inválida' }),
    (0, class_validator_1.ArrayMaxSize)(3, { message: 'Quantidade de pessoas inválida' }),
    (0, class_transformer_1.Transform)(({ value }) => {
        return value.map((item) => Number(item));
    }),
    __metadata("design:type", Array)
], AnalysisArenaDto.prototype, "peopleCount", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(3, { message: 'Ticket médio inválido' }),
    (0, class_validator_1.ArrayMaxSize)(3, { message: 'Ticket médio inválido' }),
    (0, class_transformer_1.Transform)(({ value }) => {
        return value.map((item) => Number(item));
    }),
    __metadata("design:type", Array)
], AnalysisArenaDto.prototype, "ticketAverages", void 0);
//# sourceMappingURL=analysis-arena.dto.js.map