{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
    name = "framework";

    buildInputs = [
        pkgs.bun
    ];
}
