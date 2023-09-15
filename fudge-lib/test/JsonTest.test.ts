import {expect, test} from "vitest";
import dayjs from "dayjs";
import {defaultJsonSerializer} from "../src/json";
import "../src/extensions/ExtensionsImpl"

test("dayjs json writing", () => {
    const obj = {
        key: "value",
        day: dayjs(),
        nested: {
            num: 2,
            date: dayjs().add(20,"days")
        }
    }

    const parser = defaultJsonSerializer<typeof obj>()
    const asJson = parser.stringify(obj)
    const back = parser.parse(asJson)
    console.log(back)
    expect(back).toEqual(obj)
})