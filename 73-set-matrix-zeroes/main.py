def visualize_matrix(matrix, title):
    out = ''
    for (y, col) in enumerate(matrix):
        for (x, value) in enumerate(col):
            adds = {"right": "", "left": ""}
            sep = ","
            if x == 0:
                adds['left'] = "["
            elif x == len(col) - 1:
                sep = ""
                adds["right"] = "]"
            out += f"{adds['left']}{value}{sep}{adds['right']}"
        out += '\n'
    if title:
        out = title + '\n' + out
    print(out)


def set_zeroes(matrix):
    zeroIndexes = []
    for (y, col) in enumerate(matrix):
        for (x, value) in enumerate(col):
            if value == 0:
                obj = {
                    "x": x,
                    "y": y,
                    "xN": len(col),
                    "yN": len(matrix),
                }
                zeroIndexes.append(obj)

    visualize_matrix(matrix, "before")

    for item in zeroIndexes:
        x = item['x']
        y = item['y']
        xN = item['xN']
        yN = item['yN']

        i = 0
        while i < yN:
            matrix[i][x] = 0
            i += 1

        i = 0
        while i < yN:
            matrix[y][i] = 0
            i += 1
    visualize_matrix(matrix, "after")


matrix = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
]
