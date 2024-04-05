import { formatDate } from "./utils";

describe("formatDate", () => {
  it("formats date into M/d/yyyy", () => {
    // Arrange
    const exampleDate = "2024-03-07";

    // Act
    const result = formatDate(exampleDate);

    // Assert
    expect(result).toEqual("3/7/2024");
  });
});
