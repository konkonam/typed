{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
    name = "typed";

    buildInputs = [
        pkgs.bun
    ];
}
