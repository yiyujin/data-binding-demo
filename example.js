window.EXAMPLE_STATES = [
  {
    "elems": [
      {
        "id": 1,
        "x": 50.5,
        "y": 236,
        "w": 100,
        "h": 40,
        "text": "4",
        "name": "*made"
      },
      {
        "id": 2,
        "x": 50.5,
        "y": 284,
        "w": 100,
        "h": 40,
        "text": "10",
        "name": "*attempt"
      },
      {
        "id": 3,
        "x": 170.5,
        "y": 224,
        "w": 100,
        "h": 112,
        "text": "40%",
        "name": "*percentage"
      },
      {
        "id": 4,
        "x": 26.5,
        "y": 356,
        "w": 256,
        "h": 40,
        "text": "FG",
        "name": "*statName"
      }
    ],
    "frames": [
      {
        "id": 1,
        "x": 38.5,
        "y": 224,
        "w": 124,
        "h": 112,
        "dir": "col",
        "children": [
          {
            "id": 1,
            "isFrame": false
          },
          {
            "id": 2,
            "isFrame": false
          }
        ],
        "name": "Col 1"
      },
      {
        "id": 2,
        "x": 26.5,
        "y": 212,
        "w": 256,
        "h": 136,
        "dir": "row",
        "children": [
          {
            "id": 1,
            "isFrame": true
          },
          {
            "id": 3,
            "isFrame": false
          }
        ],
        "name": "Row 2"
      },
      {
        "id": 3,
        "x": 14.5,
        "y": 200,
        "w": 280,
        "h": 208,
        "dir": "col",
        "children": [
          {
            "id": 2,
            "isFrame": true
          },
          {
            "id": 4,
            "isFrame": false
          }
        ],
        "name": "Col 3",
        "ast": {
          "selected": 0,
          "instances": [
            {
              "name": "instance0",
              "values": {
                "1": "4",
                "2": "10",
                "3": "f:parseInt(*made/*attempt*100) + \"%\"",
                "4": "FG"
              }
            },
            {
              "name": "instance1",
              "values": {
                "1": "3",
                "2": "3",
                "3": "40",
                "4": "3P"
              }
            },
            {
              "name": "instance2",
              "values": {
                "1": "3",
                "2": "4",
                "3": "f:parseInt(*made/*attempt*100) + \"%\"",
                "4": "FT"
              }
            }
          ],
          "previewAll": true
        }
      }
    ],
    "eid": 6,
    "fid": 3
  }
];
