import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request) {
  try {
    const data = await request.json()
    const { name, email, phone, subject, message } = data

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 })
    }

    const saved = await prisma.contact.create({
      data: { name, email, phone, subject, message }
    })

    return NextResponse.json({ success: true, saved })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
