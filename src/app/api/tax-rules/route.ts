import { NextResponse } from "next/server"

export async function GET() {
    return NextResponse.json({
        incomeTaxRate: 0.2,
        solidarityRate: 0.05,
        churchTaxRate: 0.08,
    })
}