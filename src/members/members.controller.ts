import { Controller, Get, UseGuards, UsePipes, Put } from '@nestjs/common';
import { MembersService } from './members.service';
import { AuthGuard } from 'src/common/auth.guard';
import { ValidationPipe } from 'src/common/validation.pipe';
import { CustomHeader } from 'src/common/decorators/common-header-decorator';
import { HeaderDTO } from 'src/common/dto/base-header.dto';

@Controller('members')
export class MembersController {
    constructor(private readonly membersService: MembersService) { }

    @Get('direct')
    @UseGuards(new AuthGuard())
    @UsePipes(new ValidationPipe())
    directMembers(@CustomHeader() headers: HeaderDTO) {
        return this.membersService.directMembers(headers.userId);
    }

    @Get('downline')
    @UseGuards(new AuthGuard())
    @UsePipes(new ValidationPipe())
    downlineMembers(@CustomHeader() headers: HeaderDTO) {
        return this.membersService.downlineMembers(headers.userId);
    }

    @Get('single-leg')
    @UseGuards(new AuthGuard())
    @UsePipes(new ValidationPipe())
    singleLegMembers(@CustomHeader() headers: HeaderDTO) {
        return this.membersService.singleLegMembers(headers.userId);
    }

    @Put('update-single-leg')
    @UseGuards(new AuthGuard())
    updateSingleLeg() {
        return this.membersService.updateSingleLeg();
    }
}
