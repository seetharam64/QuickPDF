package com.quickpdf.service;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@Service
public class StorageService {
    public String storeFile(MultipartFile File){
        try {
            Path uploaddir = Paths.get("uploads");
            if (!Files.exists(uploaddir)) {
                Files.createDirectories(uploaddir);
                Path targetLocation = uploaddir.resolve(File.getOriginalFilename());
                Files.copy(File.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
            }
        }
        catch (IOException E){
            throw new RuntimeException("Could not store file. Error: " + E.getMessage(), E);
        }
        return File.getOriginalFilename();
    }

    public Resource loadFile(String fileName){
        try{
            Path uploads = Paths.get("uploads").resolve(fileName);
            if(!Files.exists(uploads)){
                throw new RuntimeException("File not Found!");
            }
                Resource resource = new UrlResource(uploads.toUri());
                if (!resource.exists() || !resource.isReadable()){
                    throw new RuntimeException("File is not Readable");
                }
                return resource;
        }
        catch (MalformedURLException e){
            e.printStackTrace();
            throw new RuntimeException("File path is invalid:"+ fileName,e);
        }
    }

    public String convertToText (MultipartFile file) {
        try {
            if (file.isEmpty()) {
                throw new RuntimeException("Uploaded file is empty.");
            } else if (!file.getContentType().equals("application/pdf")) {
                throw new RuntimeException("Uploaded file is not a valid PDF.");
            }
            PDDocument document;
            try {
                document = PDDocument.load(file.getInputStream());
            } catch (IOException e) {
                throw new IOException("Failed to read the uploaded PDF file:" + e.getMessage());
            }
            PDFTextStripper pdfTextStripper = new PDFTextStripper();
            String text = pdfTextStripper.getText(document);
            Path output = Paths.get("uploads", file.getOriginalFilename() + ".txt");
            Files.write(output, text.getBytes());
            return output.toString();
        } catch (IOException e){
            throw new RuntimeException("Failed to convert PDF to text: "+ e.getMessage());
        }
    }
}
