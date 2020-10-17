import {createPath, ROUTE} from "./RouteFunctions";

describe("RouteFunctions", () => {
    describe('createPathFunction ', () => {
        it('returns the path string when no params', () => {
            const pathString ='/';
            const response = createPath({path: "HOME"})
            expect(response).toEqual(pathString);
        })
    })
})