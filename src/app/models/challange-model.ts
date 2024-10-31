import { DistanceModel } from "./distance-model";

export interface ChallenegeModel{
    name: string;
    from: string;
    date: string;
    image: string;
    info: string[];
    distances: DistanceModel[];
}