#!/bin/bash
# Build our Gatsby project and upload the final files to S3

# Build our static site
gatsby build

# Empty the current site bucket
aws s3 rm s3://ianholden.co.uk --recursive --profile ianholdenWebsiteCli

# Upload our new site files to the current site bucket
aws s3 cp public/ s3://ianholden.co.uk --recursive --profile ianholdenWebsiteCli
