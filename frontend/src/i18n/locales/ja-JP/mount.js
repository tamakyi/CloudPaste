export default {
  mount: {
    title: "マウントブラウザ",
    permissionRequired: "管理パネルにログインするか、APIキーを設定してマウントブラウザにアクセスする必要があります。",
    loginAuth: "管理パネルにログインするか、APIキーを設定してください",
    cancel: "キャンセル",
    backToFileList: "ファイルリストに戻る",
    noPermissionForPath: "このディレクトリの内容にアクセスする権限がありません。アクセス可能なのは {path} およびそのサブディレクトリのみです。",
    batchDelete: {
      title: "一括削除の確認",
      message: "選択した {count} 個の項目を削除しますか？この操作は元に戻せません。",
      selectedItems: "選択した項目:",
      folder: "(フォルダ)",
      moreItems: "... 等 {count} 個の項目",
      confirmButton: "削除",
      cancelButton: "キャンセル"
    },
    operations: {
      upload: "アップロード",
      createFolder: "新規フォルダ",
      refresh: "更新",
      viewMode: "ビューモード",
      batchOperations: "一括操作",
      tasks: "タスク管理"
    },
    createFolder: {
      enterName: "フォルダ名を入力してください",
      folderName: "フォルダ名",
      placeholder: "新規フォルダ",
      cancel: "キャンセル",
      create: "作成"
    },
    viewModes: {
      list: "リストビュー",
      grid: "グリッドビュー"
    },
    fileList: {
      loading: "読み込み中...",
      empty: "このディレクトリは空です",
      noMountPoints: "利用可能なマウントポイントがありません",
      name: "名称",
      size: "サイズ",
      modifiedTime: "更新日時",
      type: "種類",
      actions: "操作",
      selectAll: "全選択",
      deselectAll: "選択解除",
      clickToSort: "クリックでソート"
    },
    rename: {
      title: "名前変更",
      enterNewName: "新しい名称を入力してください",
      newName: "新名称",
      cancel: "キャンセル",
      confirm: "確認"
    },
    delete: {
      title: "削除確認",
      message: "{type} {name} を削除しますか？",
      folderWarning: "この操作はフォルダとその全内容を削除します。",
      cancel: "キャンセル",
      confirm: "削除"
    },
    messages: {
      apiKeyInfoUpdated: "APIキー情報を更新しました",
      refreshSuccess: "更新に成功しました",
      refreshFailed: "更新に失敗しました。再試行してください",
      getDirectoryContentFailed: "ディレクトリコンテンツの取得に失敗: {message}",
      getDirectoryContentFailedUnknown: "ディレクトリコンテンツの取得に失敗: {message}",
      fileUploadSuccess: "ファイルアップロード成功",
      fileUploadFailed: "ファイルアップロード失敗: {message}",
      fileUploadFailedUnknown: "ファイルアップロード失敗: {message}",
      uploadCancelling: "アップロードをキャンセル中...",
      folderCreateSuccess: "フォルダ作成成功",
      folderCreateFailed: "フォルダ作成失敗: {message}",
      folderCreateFailedUnknown: "フォルダ作成失敗: {message}",
      renameSuccess: "{type}名変更成功",
      renameFailed: "名前変更失敗: {message}",
      renameFailedUnknown: "名前変更失敗: {message}",
      deleteSuccess: "{type}削除成功",
      deleteFailed: "削除失敗: {message}",
      deleteFailedUnknown: "削除失敗: {message}",
      downloadPreparing: "ファイルダウンロード準備中...",
      downloadSuccess: "ファイルダウンロード成功",
      downloadStarted: "{name} のダウンロードを開始しました",
      downloadFailed: "ファイルダウンロード失敗: {message}",
      downloadFailedUnknown: "ファイルダウンロード失敗: {message}",
      uploading: "{name} のアップロード中...",
      initializationFailed: "初期化に失敗: {message}",
      batchDeleteFailed: "一括削除失敗: {message}",
      previewLoadFailed: "ファイルプレビューの読み込みに失敗: {message}",
      previewLoadFailedUnknown: "ファイルプレビューの読み込みに失敗: {message}",
      previewError: "ファイルプレビュー読み込み失敗",
      uploadError: "アップロード失敗: {message}",
      uploadErrorUnknown: "アップロード失敗: {message}",
      batchDeleteInProgress: "選択した項目の削除中...",
      batchDeletePartialSuccess: "削除操作は部分的に成功しました。{success} 個成功、{failed} 個失敗",
      batchDeleteSuccess: "{count} 個の項目を削除しました",
      batchDeleteFailedUnknown: "一括削除失敗: {message}",
      copySuccess: "{message}",
      copyFailed: "コピー失敗: {message}",
      getFileLinkFailed: "ファイル直リンクの取得に失敗: {message}",
      getFileLinkError: "ファイル直リンクエラー: {message}",
      noItemsSelected: "操作対象の項目を選択してください",
      confirmBatchDelete: "選択した {count} 個の項目を削除しますか？この操作は元に戻せません。",
      uploadSuccess: "アップロード成功",
      uploadFailed: "アップロード失敗: {message}"
    },
    filePreview: {
      downloadFile: "ファイルをダウンロード",
      directPreview: "直リンクプレビュー",
      generating: "生成中...",
      fileSize: "ファイルサイズ:",
      modifiedTime: "更新日時:",
      fileType: "ファイル種類:",
      unknown: "不明",
      editMode: "編集モード",
      previewMode: "プレビューモード",
      saving: "保存中...",
      save: "保存",
      cancel: "キャンセル",
      language: "言語:",
      autoDetect: "自動判別",
      configFile: "設定ファイル",
      loadingPreview: "Officeプレビューを読み込み中...",
      previewError: "ファイルプレビュー読み込み失敗",
      retryLoad: "再度読み込みを試みるかダウンロードして確認してください",
      retry: "再試行",
      cannotPreview: "このファイルタイプはプレビューできません",
      downloadToView: "現在のファイルタイプはオンラインプレビューに対応していません。ダウンロードして確認してください",
      wordPreview: "Word文書プレビュー",
      excelPreview: "Excelシートプレビュー",
      powerpointPreview: "PowerPointプレゼンテーションプレビュー",
      exitFullscreen: "全画面表示を終了",
      fullscreen: "全画面表示",
      useMicrosoftPreview: "Microsoftプレビューを使用",
      useGooglePreview: "Googleプレビューを使用",
      htmlPreview: "HTMLプレビュー",
      browserNotSupport: "お使いのブラウザはサポートしていません",
      videoTag: "ビデオタグ",
      audioTag: "オーディオタグ",
      cannotLoadText: "テキストコンテンツを読み込めません",
      loadTextError: "テキストコンテンツの読み込みエラー",
      getS3LinkFailed: "S3直リンクの取得に失敗: {message}",
      s3PreviewFailed: "S3直リンクプレビュー失敗: {message}",
      fileTooLarge: "ファイルサイズがサーバー制限を超えています（最大10MB）。サイズを縮小して再試行してください。",
      saveFileFailed: "ファイル保存失敗: {message}",
      saveFileError: "ファイル保存エラー: {message}",
      fileContentTooLarge: "ファイルサイズがサーバー制限を超えています",
      noPermissionUpdate: "このファイルを更新する権限がありません",
      serverNoResponse: "サーバーが応答していません。ネットワーク接続を確認してください",
      fileCreated: "ファイル作成成功",
      fileUpdated: "ファイル更新成功"
    },
    audioPreview: {
      loadingAudio: "オーディオを読み込み中...",
      audioPlayer: "オーディオプレイヤー"
    },
    videoPreview: {
      loadingVideo: "ビデオを読み込み中...",
      videoPlayer: "ビデオプレイヤー"
    },

    uploadModal: {
      title: "ファイルアップロード",
      uploadMethod: "アップロード方法:",
      presignedUpload: "事前署名付き直伝",
      recommended: "推奨",
      directUpload: "直接アップロード",
      multipartUpload: "マルチパートアップロード",
      directMode: "直接モード",
      presignedMode: "事前署名モード",
      multipartMode: "マルチパートモード",
      directModeDesc: "サーバー経由の直接アップロード（進捗バー非表示・小容量向け）",
      presignedModeDesc: "ストレージサーバーへの直接アップロード（Worker CPU制限回避・高速）",
      multipartModeDesc: "サーバー分割アップロード（大容量/不安定ネットワーク向け）",
      dragDropHere: "ここにファイルをドロップ",
      clickOrDragToUpload: "クリックまたはドラッグでアップロード",
      multiFileSupport: "複数ファイルサポート",
      pasteSupport: "Ctrl+Vペーストサポート",
      selectedFiles: "{count} 個のファイルを選択",
      clearAll: "全クリア",
      totalProgress: "総進捗",
      uploadSpeed: "アップロード速度:",
      uploading: "{current}/{total}: {fileName} をアップロード中...",
      cancel: "キャンセル",
      cancelUpload: "アップロードキャンセル",
      startUpload: "アップロード開始",
      fileStatus: {
        pending: "待機中",
        uploading: "{progress}%",
        success: "アップロード成功",
        error: "アップロード失敗"
      },
      cancelSingleUpload: "アップロードキャンセル",
      retryUpload: "再試行",
      removeFile: "削除",
      pasteFileAdded: "クリップボードからファイルを追加",
      confirmCancelUpload: "アップロード中のファイルです。キャンセルして閉じますか？",
      confirmClearFiles: "全ファイルをクリアしますか？",
      noFilesSelected: "アップロードするファイルを選択してください",
      uploadStarted: "ファイルアップロードを開始します...",
      allFilesUploaded: "全ファイルのアップロードが完了しました！",
      someFilesFailed: "一部のファイルがアップロードに失敗しました。エラー情報を確認してください",
      uploadCancelled: "アップロードがキャンセルされました",
      noFilesToUpload: "アップロード可能なファイルがありません",
      allFilesUploadFailed: "全ファイルのアップロードに失敗しました",
      checkFilesValid: "、有効なファイルを確認してください",
      partialUploadSuccess: "{success} 個のファイルをアップロード成功、{failed} 個失敗",
      allFilesUploadSuccess: "{count} 個のファイルを正常にアップロードしました",
      cancelUploadError: "アップロードキャンセルに失敗: {message}",
      allUploadsCancelled: "全ファイルのアップロードをキャンセルしました",
      retryUploadSuccess: "{fileName} の再アップロード成功",
      retryUploadFailed: "{fileName} の再アップロード失敗: {message}",
      retryUploadError: "{fileName} の再アップロードエラー: {message}",
      uploadFailed: "アップロード失敗",
      uploadError: "アップロード中にエラーが発生しました"
    },
    taskManager: {
      title: "タスク管理",
      noTasks: "現在タスクはありません",
      noTasksDescription: "進行中または完了したタスクはありません",
      activeTasks: "進行中のタスク ({count})",
      completedTasks: "完了したタスク ({count})",
      clearCompleted: "完了済みをクリア",
      cancel: "キャンセル",
      retry: "再試行",
      details: "詳細",
      hideDetails: "詳細を隠す",
      status: {
        pending: "保留中",
        running: "実行中",
        completed: "完了",
        failed: "失敗",
        cancelled: "キャンセル済み"
      },
      types: {
        copy: "コピー",
        upload: "アップロード",
        delete: "削除",
        download: "ダウンロード"
      },
      progress: "進捗: {current}/{total}",
      timeElapsed: "経過時間: {time}",
      createdAt: "作成日時: {time}",
      updatedAt: "更新日時: {time}",
      error: "エラー: {message}",
      confirmCancel: "このタスクをキャンセルしますか？",
      confirmClearCompleted: "全ての完了済みタスクをクリアしますか？",
      downloading: "ダウンロード中",
      uploading: "アップロード中",
      processing: "処理中",
      currentFile: "現在のファイル: {fileName}",
      processed: "処理済み: {current}/{total}",
      completedAt: "完了日時: {time}",
      processedItems: "処理項目: {current}/{total}",
      success: "成功: {count}",
      skipped: "スキップ: {count}",
      failed: "失敗: {count}",
      partialComplete: "部分完了",
      copyTask: "コピータスク",
      uploadTask: "アップロードタスク",
      deleteTask: "削除タスク",
      downloadTask: "ダウンロードタスク",
      unknownTask: "不明タスク",
      waiting: "待機中",
      unknown: "不明",
      unknownTime: "不明",
      copyTaskName: "{count} 個の項目を {path} にコピー",
      copyStarted: "{count} 個の項目を {path} にコピー開始しました。タスク管理で進捗を確認してください"
    },
    copyModal: {
      title: "コピー先フォルダ選択",
      selectedInfo: "選択済み: {count} 個の項目 ({folders} 個のフォルダ, {files} 個のファイル)",
      targetLocation: "コピー先:",
      loading: "読み込み中...",
      rootDirectory: "ルートディレクトリ",
      cancel: "キャンセル",
      confirmCopy: "コピー確認",
      copying: "コピー中...",
      warnings: {
        recursiveCopy: "警告：フォルダを自身またはサブディレクトリにコピーすると無限再帰が発生します。",
        selfCopy: "警告：フォルダを自身にコピーすることはできません。"
      },
      confirmPotentialIssue: "潜在的な問題が検出されました: {warning}\n\nコピーを続行しますか？"
    },
    linkCopied: "ファイル直リンクをクリップボードにコピーしました",
    fileItem: {
      download: "ダウンロード",
      getLink: "直リンク取得",
      rename: "名前変更",
      delete: "削除",
      preview: "プレビュー",
      copy: "コピー",
      move: "移動",
      properties: "プロパティ"
    },
    fileTypes: {
      folder: "フォルダ",
      file: "ファイル",
      image: "画像",
      video: "動画",
      audio: "音声",
      document: "ドキュメント",
      archive: "アーカイブ",
      code: "コード",
      unknown: "不明な種類"
    },
    sizeUnits: {
      bytes: "バイト",
      kb: "KB",
      mb: "MB",
      gb: "GB",
      tb: "TB"
    }
  },
  breadcrumb: {
    navigation: "パンくずナビゲーション",
    root: "ルートディレクトリ",
    batchOperations: "一括操作",
    enableSelection: "選択有効化",
    exitSelection: "選択解除",
    copySelected: "選択コピー",
    deleteSelected: "選択削除",
    selectedCount: "({count})",
    // モバイル用短縮テキスト
    mobile: {
      enableSelection: "選択",
      exitSelection: "解除",
      copySelected: "コピー",
      deleteSelected: "削除"
    }
  }
}