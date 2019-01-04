# set env vars usually set by MyGet (enable for local testing)
# $env:SourcesPath = '..'
# $env:NuGet = "C:/Applications/nuget.exe" #https://dist.nuget.org/win-x86-commandline/latest/nuget.exe

$nuget = $env:NuGet

# parse the version number out of package.json
$bsversion = ((Get-Content $env:SourcesPath\package.json) -join "`n" | ConvertFrom-Json).version

# create packages
& $nuget pack "$env:SourcesPath\nuget\boosted.nuspec" -Verbosity detailed -NonInteractive -NoPackageAnalysis -BasePath $env:SourcesPath -Version $bsversion
& $nuget pack "$env:SourcesPath\nuget\boosted.less.nuspec" -Verbosity detailed -NonInteractive -NoPackageAnalysis -BasePath $env:SourcesPath -Version $bsversion
