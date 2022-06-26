import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';

@Injectable()
export class BookmarkService {
    constructor(private prisma: PrismaService) {}
    async createBookmark(
        userId: number, 
        dto: CreateBookmarkDto
        ) {
            const bookmark = await this.prisma.bookmark.create({
                data: {
                    userId,
                    ...dto
                }
            });

            return bookmark;
        }

    getBookmarks(
        userId: number
        ) {
            return this.prisma.bookmark.findMany({
                where: {
                    userId
                }
            });
        }

    getBookmarkById(
        userId: number, 
        bookmarkId: number
        ) {
            return this.prisma.bookmark.findFirst({
                where: {
                    userId,
                    id: bookmarkId
                }
            });
        }

    async editBookmarkById(
        userId: number, 
        dto: EditBookmarkDto, 
        bookmarkId: number) {
            const bookmark = await this.prisma.bookmark.findUnique({
                where: {
                    id: bookmarkId
                },
            });

            if (!bookmark || bookmark.userId !== userId) 
                throw new ForbiddenException(
                    'Access to this resource is denied');
            
            return this.prisma.bookmark.update({
                where: { 
                   id: bookmarkId,
                },
                data: {
                    ...dto,
                },
            });
        }

    async deleteBookmarkById(
        userId: number, 
        bookmarkId: number
        ) {
            const bookmark = await this.prisma.bookmark.findUnique({
                where: {
                    id: bookmarkId
                },
            });

            if (!bookmark || bookmark.userId !== userId) 
                throw new ForbiddenException(
                    'Access to this resource is denied',
                    );
            await this.prisma.bookmark.delete({
                where: {
                    id: bookmarkId,
                },
            });
        }
}
