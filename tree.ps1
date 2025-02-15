function Get-DirectoryTree {
    param (
        [string]$Path = ".",
        [string]$Indent = ""
    )

    $Items = Get-ChildItem -Directory -Path $Path -Exclude "node_modules"

    for ($i = 0; $i -lt $Items.Count; $i++) {
        $Item = $Items[$i]
        $Last = ($i -eq ($Items.Count - 1))

        $Prefix = $Indent + "  "
        if ($Last) {
            $Prefix += "`-- "
        } else {
            $Prefix += "|-- "
        }

        Write-Host $Prefix$($Item.Name)

        if ($Last) {
            Get-DirectoryTree -Path $Item.FullName -Indent ($Indent + "   ")
        } else {
            Get-DirectoryTree -Path $Item.FullName -Indent ($Indent + "|  ")
        }
    }
}

Write-Host "."
Get-DirectoryTree