import { PrismaService } from '../prisma/prisma.service';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';
export declare class BookmarkService {
    private prisma;
    constructor(prisma: PrismaService);
    createBookmark(userId: number, dto: CreateBookmarkDto): Promise<import(".prisma/client").Bookmark>;
    getBookmarks(userId: number): import(".prisma/client").PrismaPromise<import(".prisma/client").Bookmark[]>;
    getBookmarkById(userId: number, bookmarkId: number): import(".prisma/client").Prisma.Prisma__BookmarkClient<import(".prisma/client").Bookmark>;
    editBookmarkById(userId: number, dto: EditBookmarkDto, bookmarkId: number): Promise<import(".prisma/client").Bookmark>;
    deleteBookmarkById(userId: number, bookmarkId: number): Promise<void>;
}
