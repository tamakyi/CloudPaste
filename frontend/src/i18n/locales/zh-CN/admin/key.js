export default {
  keyManagement: {
    title: "APIキー管理",
    refresh: "更新",
    bulkDelete: "一括削除",
    delete: "削除",
    create: "新規キー作成",
    createShort: "作成",
    lastRefreshed: "最終更新",
    table: {
      select: "選択",
      name: "名前",
      key: "キー",
      permissions: "権限",
      basicPath: "ベースパス",
      expires: "有効期限",
      lastUsed: "最終利用",
      actions: "操作",
      noData: "APIキー未登録",
      loading: "ロード中..."
    },
    keyName: "キー名",
    key: "キー",
    permissions: {
      text: "テキスト",
      file: "ファイル",
      mount: "マウント",
      readOnly: "読み取り専用",
      none: "なし"
    },
    permissionsColumn: "権限",
    basicPath: "ベースパス",
    createdAt: "作成日時",
    expiresAt: "有効期限",
    lastUsed: "最終利用",
    actions: "操作",
    loading: "ロード中...",
    loadingKeys: "キーロード中...",
    neverUsed: "未使用",
    noKeysTitle: "APIキー未登録",
    noKeysDescription: "まだAPIキーを作成していません。上記ボタンで最初のキーを作成してください",
    textPermissionFull: "テキスト",
    filePermissionFull: "ファイル",
    mountPermissionFull: "マウント",
    noPermission: "権限なし",
    copyKey: "コピー",
    copyKeyFull: "完全キーをコピー",
    edit: "編集",
    deleteKey: "削除",
    neverExpires: "期限なし",
    createModal: {
      title: "新規APIキー作成",
      tabs: {
        basic: "基本情報",
        path: "パス選択"
      },
      keyName: "キー名",
      keyNamePlaceholder: "キー名を入力",
      keyNameHelp: "APIキーを識別しやすい名前を設定",
      useCustomKey: "カスタムキー使用",
      customKey: "カスタムキー",
      customKeyPlaceholder: "カスタムキー入力（任意）",
      customKeyHelp: "英数字・アンダースコア・ハイフンのみ使用可能",
      expiration: "有効期限",
      expirationOptions: {
        "1d": "1日",
        "7d": "7日",
        "30d": "30日",
        never: "期限なし",
        custom: "カスタム"
      },
      customExpiration: "カスタム有効期限",
      customExpirationPlaceholder: "日数を入力",
      permissions: {
        text: "テキスト権限",
        file: "ファイル権限",
        mount: "マウント権限"
      },
      textPermission: "テキスト権限",
      filePermission: "ファイル権限",
      mountPermission: "マウント権限",
      readOnlyMount: "読み取り専用マウント",
      basicPath: "ベースパス",
      basicPathPlaceholder: "/",
      basicPathHelp: "APIキーがアクセス可能なベースパスを設定（デフォルトはルート）",
      selectPath: "パス選択",
      securityTip: "セキュリティのヒント",
      securityMessage: "APIキーは公開場所や安全でない環境で使用しないでください。",
      pathSelector: {
        title: "ベースパス選択",
        rootDirectory: "ルートディレクトリ",
        selectDirectory: "ディレクトリ選択",
        currentPath: "現在の選択",
        confirm: "パス確認",
        cancel: "キャンセル",
        loading: "ロード中...",
        loadError: "ロード失敗",
        noDirectories: "サブディレクトリが存在しません"
      },
      create: "作成",
      creating: "作成中...",
      processing: "処理中...",
      cancel: "キャンセル",
      errors: {
        nameRequired: "キー名を入力してください",
        customKeyRequired: "カスタムキーを入力してください",
        customKeyFormat: "カスタムキーは英数字・アンダースコア・ハイフンのみ使用可能です",
        expirationRequired: "カスタム有効期限を入力してください",
        invalidExpiration: "無効な有効期限です",
        createFailed: "キー作成に失敗しました"
      }
    },
    editModal: {
      title: "APIキー編集",
      tabs: {
        basic: "基本情報",
        path: "パス選択"
      },
      keyName: "キー名",
      keyNamePlaceholder: "キー名を入力",
      keyNameHelp: "APIキーを識別しやすい名前を設定",
      expiration: "有効期限",
      expirationOptions: {
        "1d": "1日",
        "7d": "7日",
        "30d": "30日",
        never: "期限なし",
        custom: "カスタム"
      },
      customExpiration: "カスタム有効期限",
      customExpirationPlaceholder: "日数を入力",
      permissions: {
        text: "テキスト権限",
        file: "ファイル権限",
        mount: "マウント権限"
      },
      textPermission: "テキスト権限",
      filePermission: "ファイル権限",
      mountPermission: "マウント権限",
      basicPath: "ベースパス",
      basicPathPlaceholder: "/",
      basicPathHelp: "APIキーがアクセス可能なベースパスを設定（デフォルトはルート）",
      selectPath: "パス選択",
      securityTip: "セキュリティのヒント",
      securityMessage: "APIキーは公開場所や安全でない環境で使用しないでください。",
      pathSelector: {
        title: "ベースパス選択",
        rootDirectory: "ルートディレクトリ",
        selectDirectory: "ディレクトリ選択",
        currentPath: "現在の選択",
        confirm: "パス確認",
        cancel: "キャンセル",
        loading: "ロード中...",
        loadError: "ロード失敗",
        noDirectories: "サブディレクトリが存在しません"
      },
      update: "更新",
      updating: "更新中...",
      processing: "処理中...",
      cancel: "キャンセル",
      errors: {
        nameRequired: "キー名を入力してください",
        expirationRequired: "カスタム有効期限を入力してください",
        invalidExpiration: "無効な有効期限です",
        updateFailed: "キー更新に失敗しました"
      }
    },
    success: {
      created: "APIキー作成成功",
      createdAndCopied: "キー作成済み・クリップボードにコピー済み",
      updated: "APIキー更新成功",
      deleted: "APIキー削除成功",
      bulkDeleted: "{count}個のキーを一括削除しました",
      copied: "キーをクリップボードにコピー済み"
    },
    error: {
      cannotLoadList: "キー一覧の取得に失敗",
      loadFailed: "APIキーのロードに失敗",
      copyFailed: "クリップボードコピーに失敗",
      deleteFailed: "キー削除に失敗",
      bulkDeleteFailed: "一括削除に失敗",
      noKeysSelected: "削除対象のキーを選択してください"
    },
    confirmDelete: 'キー "{name}" を削除しますか？この操作は取り消せません。',
    deleteConfirm: "本当にこのキーを削除しますか？この操作は取り消せません。",
    confirmBulkDelete: "{count}個のキーを削除しますか？この操作は取り消せません。",
    selectKeysFirst: "まず削除するキーを選択してください",
    bulkDeleteConfirm: "{count}個のキーを削除しますか？この操作は取り消せません。"
  }
};