import { expect, test } from "vitest"
import { minutesToTime } from "../src/lib/utils/conversion.ts"

test("62,5 minuten wordt 1 uur 2 minuten en 30 seconden", () => {
    expect(minutesToTime(62.5)).toEqual({
        hours: 1,
        minutes: 2,
        seconds: 30
    })
})