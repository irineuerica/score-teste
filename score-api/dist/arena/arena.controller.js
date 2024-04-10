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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArenaController = void 0;
const common_1 = require("@nestjs/common");
const arena_service_1 = require("./arena.service");
const analysis_arena_dto_1 = require("./dto/analysis-arena.dto");
let ArenaController = class ArenaController {
    constructor(arenaService) {
        this.arenaService = arenaService;
    }
    create(arenaData) {
        return this.arenaService.analysis(arenaData);
    }
};
exports.ArenaController = ArenaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [analysis_arena_dto_1.AnalysisArenaDto]),
    __metadata("design:returntype", void 0)
], ArenaController.prototype, "create", null);
exports.ArenaController = ArenaController = __decorate([
    (0, common_1.Controller)('arena'),
    __metadata("design:paramtypes", [arena_service_1.ArenaService])
], ArenaController);
//# sourceMappingURL=arena.controller.js.map