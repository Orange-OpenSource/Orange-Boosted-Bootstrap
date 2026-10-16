export type ParsedPath = { d: string; fill?: string; fillRule?: string };

export function parseSprite(
    sprite: string,
    names: string[],
): Map<string, { viewBox: string; paths: ParsedPath[] }>;

export function toExportName(name: string): string;

export function iconToSource(
    name: string,
    viewBox: string,
    pathsByBrand: Record<string, ParsedPath[]>,
): string;

export function generate(options?: {
    packageDirectory?: string;
}): Promise<Map<string, string>>;
