import { Repository } from "typeorm";
import { Image } from "../models/image";
export declare class ImageRepository extends Repository<Image> {
    upsertImages(imageUrls: string[]): Promise<Image[]>;
}
