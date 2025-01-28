package com.quickpdf.controller;

import com.quickpdf.service.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/files")
public class FileUploadController {

    private final StorageService storageService;

    @Autowired
    public FileUploadController(StorageService storageService) {
        this.storageService = storageService;
    }

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile (@RequestParam("file") MultipartFile File){
        try{
            String fileName = storageService.storeFile(File);
            return ResponseEntity.ok("File uploaded Successfully" + fileName);
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Could not upload the file: "
            + e.getMessage());
        }
    }

    @GetMapping("/{fileName}")
    public ResponseEntity<Resource> getFike (@PathVariable String fileName){
           Resource fileResource = storageService.loadFile(fileName);
           HttpHeaders headers = new HttpHeaders();
           headers.add(HttpHeaders.CONTENT_DISPOSITION,"attachment; filename = \""+ fileName + "\"");
           return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF).body(fileResource);
    }

    @PostMapping("/convert-to-text")
    public ResponseEntity<String> convertToText(@RequestParam("file") MultipartFile File){
        try{
            String filePath = storageService.convertToText(File);
            return ResponseEntity.ok("Text file created successfully: "+ filePath);
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to convert PDF to text:"
            + e.getMessage());
        }
    }
}
