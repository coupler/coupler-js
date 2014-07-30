command! -nargs=1 AddModelTest call <SID>add_model_test(<f-args>)
command! -nargs=1 AddValidatorTest call <SID>add_validator_test(<f-args>)
command! -nargs=1 AddViewTest call <SID>add_view_test(<f-args>)
command! -nargs=1 AddControllerTest call <SID>add_controller_test(<f-args>)

function! s:add_model_test(name)
  call s:add_source('model', 'models', a:name)
  call s:add_test('model', 'models', a:name)
endf

function! s:add_validator_test(name)
  call s:add_source('validator', 'validators', a:name)
  call s:add_test('validator', 'validators', a:name)
endf

function! s:add_view_test(name)
  call s:add_source('view', 'views', a:name)
  call s:add_test('view', 'views', a:name)
endf

function! s:add_controller_test(name)
  call s:add_source('controller', 'controllers', a:name)
  call s:add_test('controller', 'controllers', a:name)
endf

function! s:add_source(type, subdir, name)
  let sources_start_line = search('<!-- begin '.a:type.' sources -->')
  let sources_end_line = search('<!-- end '.a:type.' sources -->')
  if sources_start_line == 0 || sources_end_line == 0
    return
  endif

  let sources_list = getbufline("", l:sources_start_line, l:sources_end_line)
  if match(sources_list, a:name) == -1
    call append(sources_end_line - 1, '  <script src="../src/js/'.a:subdir.'/'.a:name.'.js"></script>')
  endif
endf

function! s:add_test(type, subdir, name)
  let tests_start_line = search('<!-- begin '.a:type.' tests -->')
  let tests_end_line = search('<!-- end '.a:type.' tests -->')
  if tests_start_line == 0 || tests_end_line == 0
    return
  endif

  let tests_list = getbufline("", l:tests_start_line, l:tests_end_line)
  if match(tests_list, a:name) == -1
    call append(tests_end_line - 1, '  <script src="js/'.a:subdir.'/test_'.a:name.'.js"></script>')
  endif
endf
