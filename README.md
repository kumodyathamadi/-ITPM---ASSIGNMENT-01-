# Test Automation – Setup & Usage Guide

This project uses **Python + Playwright** to automate translation test cases against a web-based chat translator. Test data is read from an Excel file, and results are written back automatically.

---

## Prerequisites

Make sure the following are installed on your machine **before** proceeding:

- **Python 3.11 or 3.12** – [Download here](https://www.python.org/downloads/)
- **Google Chrome** (recommended) – [Download here](https://www.google.com/chrome/)
  - Alternatively, Playwright can install its own Chromium browser (handled in Step 3)

---

## Project Structure

```
D:\test_automation\
├── test_automation.py          # Main Playwright automation script
├── Assignment 1 - Test cases.xlsx  # Test data file (input + results)
└── Commands.txt                # Quick reference for commands
```

---

## Step-by-Step Setup

### 1. Extract the Project

- Save the provided ZIP file to your **D: drive**
- Right-click the ZIP and select **Extract All**
- Confirm the extracted folder is located at `D:\test_automation`

### 2. Open Command Prompt

- Press `Win + R`, type `cmd`, and press **Enter**
- Navigate to the project folder by running:

```bash
cd /d D:\test_automation
```

### 3. Install Dependencies *(one-time only)*

Run the following three commands in order:

```bash
pip install -U pip
pip install playwright openpyxl
playwright install
```

> **Note:** These only need to be run once. Skip this step on subsequent runs.

---

## Preparing Test Data

1. Open **`Assignment 1 - Test cases.xlsx`** from the `D:\test_automation` folder
2. Fill in your test cases under these columns:

| Column | Description |
|---|---|
| `TC ID` | Unique test case identifier (e.g., `Pos_0001`) |
| `Input length type` | Size category of the input — `S` (short) or `M` (medium) |
| `Input` | The Singlish text to be translated |
| `Expected output` | The expected Sinhala translation |

>  **Do NOT enter values** in the `Actual output` or `Status` columns — these are filled in automatically by the script.

---

## Running the Tests

From the `D:\test_automation` directory in Command Prompt, run:

```bash
python test_automation.py --excel "test_automation/Assignment 1 - Test cases.xlsx" --url "https://www.pixelssuite.com/chat-translator" --wait-ms 5000 --type-delay-ms 80 --slow-mo-ms 200 --save-every 1 --keep-open
```

### Command Flags Explained

| Flag | Value | Description |
|---|---|---|
| `--excel` | Path to `.xlsx` file | Location of your test cases spreadsheet |
| `--url` | Target URL | The chat translator web page to test against |
| `--wait-ms` | `5000` | Milliseconds to wait for translation response |
| `--type-delay-ms` | `80` | Delay between keystrokes when typing input |
| `--slow-mo-ms` | `200` | Slow-motion delay for browser actions |
| `--save-every` | `1` | Save results to Excel after every N test cases |
| `--keep-open` | *(flag)* | Keeps the browser open after tests complete |

---

## Checking Results

1. Navigate to the `D:\test_automation` folder
2. Reopen **`Assignment 1 - Test cases.xlsx`**
3. Verify the values automatically populated under:
   - **`Actual output`** – the translation returned by the tool
   - **`Status`** – `Pass` if actual matches expected, `Fail` otherwise

---

## Adding Analysis Columns *(Post-Run)*

After reviewing results, manually add two additional columns next to `Status`:

| Column | Description |
|---|---|
| `Singlish input types covered` | The category of Singlish input used (e.g., *Question forms*, *Requests*, *Romanization / Spelling Variants*) |
| `Evidence or rationale for the input type covered` | A brief justification referencing specific words or phrases from the input |

Refer to **Appendix 2** of the assignment document for example values and a detailed template.

---

## Troubleshooting

- **`pip` not recognized** – Make sure Python is added to your system PATH during installation.
- **Browser not launching** – Run `playwright install` again to ensure browser binaries are downloaded.
- **Excel file locked** – Close the `.xlsx` file before running the script, as the script needs write access to save results.
