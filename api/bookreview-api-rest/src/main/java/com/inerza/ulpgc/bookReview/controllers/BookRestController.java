package com.inerza.ulpgc.bookReview.controllers;

import com.inerza.ulpgc.bookReview.core.persistence.IBookService;
import com.inerza.ulpgc.bookReview.model.dto.BookDTO;
import com.inerza.ulpgc.bookReview.model.entities.Book;
import com.inerza.ulpgc.bookReview.model.mappers.BookMapper;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@Tag(description = "Books to be reviewed.", name = "Book Resource")
@RestController
@RequestMapping("books")
public class BookRestController {
    
    @Autowired
    private IBookService bookService;

    @Operation(summary = "Get books", description = "Provides all available books list")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "${api.response-codes.ok.desc}"),
            @ApiResponse(responseCode = "400", description = "${api.response-codes.badRequest.desc}",
                    content = { @Content(examples = { @ExampleObject(value = "") }) }),
            @ApiResponse(responseCode = "404", description = "${api.response-codes.notFound.desc}",
                    content = { @Content(examples = { @ExampleObject(value = "") }) }) })
    @GetMapping(produces = "application/json")
    @ResponseBody
    public List<BookDTO> getBooks(
            @Parameter(name = "page", description = "Página")
            @RequestParam() Integer page,
            @Parameter(name = "size", description = "Elementos por página")
            @RequestParam() Integer size,
            @Parameter(name = "sortDir", description = "ASC o DSC")
            @RequestParam() String sortDir,
            @Parameter(name = "sort", description = "Ordenar por campo Ex. 'id' ")
            @RequestParam() String sort) {

        List<Book> books = bookService.getBookList(page, size, sortDir, sort);
        return books.stream()
          .map(x -> BookMapper.INSTANCE.convertToDto(x))
          .collect(Collectors.toList());
    }
}
