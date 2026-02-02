# Python venv – Commands

Create virtual environment:  
Windows: `python -m venv .venv`  
macOS / Linux: `python3 -m venv .venv`

Activate virtual environment:  
Windows (PowerShell): `.venv\Scripts\Activate.ps1`  
macOS / Linux: `source .venv/bin/activate`

Deactivate virtual environment:  
`deactivate`

Check Python and pip versions:  
`python --version`  
`pip --version`

Check Python executable path:  
`import sys; sys.executable`

Install packages:  
`pip install package_name`

List installed packages:  
`pip list`

Save dependencies:  
`pip freeze > requirements.txt`

Install dependencies from file:  
`pip install -r requirements.txt`

Upgrade pip:  
`python -m pip install --upgrade pip`

Remove virtual environment:  
Delete the `.venv/` directory

PowerShell execution policy (Windows):  
`Get-ExecutionPolicy -List`  
`Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`
