export default {
  // 通用
  common: {
    unknown: "不明",
    loading: "読み込み中...",
    confirm: "確認",

    // 分页组件
    pagination: {
      // 移动端
      previousPage: "前のページ",
      nextPage: "次のページ",
      pageInfo: "{current}/{total}",

      // 桌面端
      showingRange: "{start}～{end}件を表示 / 全{total}件",
      firstPage: "最初のページ",
      lastPage: "最後のページ",

      // 无障碍文本
      ariaLabel: "ページネーション",
      srFirstPage: "最初のページ",
      srPreviousPage: "前のページ",
      srNextPage: "次のページ",
      srLastPage: "最後のページ",
    },

    // 错误提示组件
    errorToast: {
      defaultTitle: "操作に失敗しました",
      close: "閉じる",
      srClose: "閉じる",
    },
  },

  // 应用标题
  app: {
    title: "狼的剪贴板",
  },

  // 页面标题
  pageTitle: {
    home: "狼的剪贴板 - オンラインクリップボード",
    upload: "ファイルアップロード - 狼的剪贴板",
    admin: "管理パネル - 狼的剪贴板",
    pasteView: "共有を表示 - 狼的剪贴板",
    fileView: "ファイルプレビュー - 狼的剪贴板",
    mountExplorer: "マウントエクスプローラー - 狼的剪贴板",
    notFound: "ページが見つかりません - 狼的剪贴板",
    // 管理模块标题
    adminModules: {
      dashboard: "ダッシュボード",
      textManagement: "テキスト管理",
      fileManagement: "ファイル管理",
      storageConfig: "S3ストレージ設定",
      mountManagement: "マウント管理",
      keyManagement: "キー管理",
      settings: "システム設定",
    },
  },

  // 导航栏
  nav: {
    home: "ホーム",
    upload: "ファイルアップロード",
    mountExplorer: "マウントエクスプローラー",
    admin: "管理パネル",
    menu: "メインメニュー",
  },

  // 主题切换
  theme: {
    toggle: "テーマ切り替え",
    light: "ライトモード",
    dark: "ダークモード",
    auto: "自動モード",
  },

  // 底部版权
  footer: {
    copyright: "© {year} 狼的剪贴板. 全著作権所有.",
  },

  // 面包屑导航
  breadcrumb: {
    navigation: "パンくずリスト",
    root: "ルートディレクトリ",
    batchOperations: "一括操作",
    enableSelection: "選択を有効化",
    exitSelection: "選択を終了",
    copySelected: "選択項目をコピー",
    deleteSelected: "選択項目を削除",
    selectedCount: "({count})",
  },

  // 管理面板
  admin: {
    title: {
      admin: "管理パネル",
      user: "ユーザーパネル",
    },
    sidebar: {
      dashboard: "ダッシュボード",
      textManagement: "テキスト管理",
      fileManagement: "ファイル管理",
      storageConfig: "S3ストレージ設定",
      mountManagement: "マウント管理",
      keyManagement: "キー管理",
      settings: "システム設定",
      logout: "ログアウト",
      logoutAuth: "認証を終了",
      openMenu: "メニューを開く",
      closeMenu: "メニューを閉じる",
      menuTitle: {
        admin: "管理パネル",
        user: "ユーザーパネル",
      },
    },
    permissionDenied: {
      title: "権限が不足しています",
      message: "この機能にアクセスする権限がありません。",
      suggestion: "管理者に連絡して必要な権限を取得してください。",
    },

    // 登录面板
    login: {
      // 标题
      adminLogin: "管理者ログイン",
      apiKeyAuth: "APIキー認証",

      // 表单字段
      username: "ユーザー名",
      password: "パスワード",
      apiKey: "APIキー",

      // 按钮
      loginButton: "ログイン",
      loggingIn: "ログイン中...",
      useApiKey: "APIキーでログイン",
      useAdminAccount: "管理者アカウントでログイン",

      // 输入验证
      inputRequired: {
        usernamePassword: "ユーザー名とパスワードを入力してください",
        apiKey: "APIキーを入力してください",
      },

      // 错误消息
      errors: {
        invalidToken: "無効なログイントークン",
        invalidCredentials: "ユーザー名またはパスワードが間違っています",
        loginFailed: "ログインに失敗しました",
        invalidResponse: "サーバー応答形式が不正です",
        serverError: "サーバーエラー",
        keyValidationFailed: "APIキーの検証に失敗しました",
        permissionInfo: "権限情報を取得できませんでした",
        invalidApiKey: "APIキーが無効または未承認です",
        insufficientPermissions: "APIキーの権限が不足しています",
      },
    },

    // 系统设置
    settings: {
      title: "システム設定",
      description: "システム構成と管理者アカウント情報の管理",

      // 上传设置
      uploadSettings: {
        title: "アップロード制限設定",
        description: "ファイルアップロードのサイズ制限とWebDAVアップロードモードの設定",
        maxUploadSizeLabel: "最大アップロードファイルサイズ",
        maxUploadSizePlaceholder: "数値を入力",
        maxUploadSizeHint: "単一ファイルの最大アップロードサイズ制限",
        unitKB: "KB",
        unitMB: "MB",
        unitGB: "GB",
        footerHint: "変更後は即時有効化され、全ユーザーのファイルアップロードに影響します",
      },

      // WebDAV设置
      webdavSettings: {
        uploadModeLabel: "WebDAVアップロードモード",
        uploadModeHint: "WebDAVクライアントのアップロード処理方法を選択",
        modes: {
          auto: "自動モード（推奨）",
          proxy: "プリサインアップロード",
          multipart: "マルチパートアップロード",
          direct: "ダイレクトアップロード",
        },
      },

      // 管理员设置
      adminSettings: {
        title: "管理者情報変更",
        description: "管理者のユーザー名とパスワードを変更",
        newUsernameLabel: "新しいユーザー名",
        newUsernamePlaceholder: "新しいユーザー名を入力",
        newUsernameHint: "空欄の場合はユーザー名変更なし",
        currentPasswordLabel: "現在のパスワード",
        currentPasswordPlaceholder: "現在のパスワードを入力",
        currentPasswordHint: "本人確認のため現在のパスワードが必要です",
        newPasswordLabel: "新しいパスワード",
        newPasswordPlaceholder: "新しいパスワードを入力",
        newPasswordHint: "空欄の場合はパスワード変更なし",
        footerHint: "変更後は自動的にログアウトされ、再ログインが必要です",
      },

      // 状态消息
      status: {
        success: "設定の更新に成功しました",
        processing: "処理中...",
        updateSettings: "設定を更新",
        updateAccount: "アカウントを更新",
        adminUpdateSuccess: "管理者情報が更新されました。自動的にログアウトされます",

        // 错误消息
        errors: {
          maxUploadSizeError: "最大アップロードサイズは0より大きい必要があります",
          updateSettingsError: "システム設定の更新に失敗しました",
          currentPasswordRequired: "現在のパスワードを入力してください",
          newFieldRequired: "新しいユーザー名または新しいパスワードのいずれかを入力してください",
          passwordSame: "新しいパスワードは現在のパスワードと同じにできません",
          updateInfoError: "管理者情報の更新に失敗しました",
        },
      },
    },

    // 密钥管理
    keyManagement: {
      title: "APIキー管理",
      refresh: "更新",
      bulkDelete: "一括削除",
      delete: "削除",
      create: "新しいキーを作成",
      createShort: "作成",
      lastRefreshed: "最終更新",

      // 表格列标题
      table: {
        select: "選択",
        name: "名前",
        key: "キー",
        permissions: "権限",
        basicPath: "ベースパス",
        expires: "有効期限",
        lastUsed: "最終使用",
        actions: "操作",
        noData: "APIキーがありません",
        loading: "読み込み中...",
      },

      // 表格字段名称（用于兼容）
      keyName: "名前",
      key: "キー",
      permissions: "権限",
      permissionsColumn: "権限",
      basicPath: "ベースパス",
      createdAt: "作成日時",
      expiresAt: "有効期限",
      lastUsed: "最終使用",
      actions: "操作",
      loading: "読み込み中...",
      loadingKeys: "キーを読み込み中...",
      neverUsed: "未使用",

      // 空状态
      noKeysTitle: "APIキーがありません",
      noKeysDescription: "まだAPIキーを作成していません。上部のボタンから最初のキーを作成してください",

      // 权限标签
      textPermissionFull: "テキスト",
      filePermissionFull: "ファイル",
      mountPermissionFull: "マウント",
      noPermission: "権限なし",

      // 权限显示
      permissions: {
        text: "テキスト",
        file: "ファイル",
        mount: "マウント",
        readOnly: "読み取り専用",
        none: "なし",
      },

      // 操作按钮
      copyKey: "コピー",
      copyKeyFull: "完全なキーをコピー",
      edit: "編集",
      deleteKey: "削除",
      neverExpires: "無期限",

      // 创建密钥模态框
      createModal: {
        title: "新しいAPIキーを作成",
        tabs: {
          basic: "基本情報",
          path: "パス選択",
        },
        keyName: "キー名",
        keyNamePlaceholder: "キー名を入力",
        keyNameHelp: "APIキーを識別しやすい名前を設定してください",
        useCustomKey: "カスタムキーを使用",
        customKey: "カスタムキー",
        customKeyPlaceholder: "カスタムキーを入力（オプション）",
        customKeyHelp: "英数字、アンダースコア、ハイフンのみ使用可能",
        expiration: "有効期限",
        expirationOptions: {
          "1d": "1日",
          "7d": "7日",
          "30d": "30日",
          never: "無期限",
          custom: "カスタム",
        },
        customExpiration: "カスタム有効期限",
        customExpirationPlaceholder: "日数を入力",
        permissions: "権限設定",
        permissions: {
          text: "テキスト権限",
          file: "ファイル権限",
          mount: "マウント権限",
        },
        textPermission: "テキスト権限",
        filePermission: "ファイル権限",
        mountPermission: "マウント権限",
        readOnlyMount: "読み取り専用マウント",
        basicPath: "ベースパス",
        basicPathPlaceholder: "/",
        basicPathHelp: "APIキーがアクセス可能なベースパスを設定（デフォルトはルートパス）",
        selectPath: "パスを選択",
        securityTip: "セキュリティヒント",
        securityMessage: "APIキーは慎重に保管し、公共の場や安全でない環境で使用しないでください。",
        pathSelector: {
          title: "ベースパスを選択",
          rootDirectory: "ルートディレクトリ",
          selectDirectory: "ディレクトリを選択",
          currentPath: "現在の選択",
          confirm: "パスを確定",
          cancel: "キャンセル",
          loading: "読み込み中...",
          loadError: "読み込み失敗",
          noDirectories: "このディレクトリにサブディレクトリがありません",
        },
        create: "作成",
        creating: "作成中...",
        processing: "処理中...",
        cancel: "キャンセル",

        // 错误消息
        errors: {
          nameRequired: "キー名は必須です",
          customKeyRequired: "カスタムキーは必須です",
          customKeyFormat: "カスタムキーの形式が不正です。英数字、アンダースコア、ハイフンのみ使用可能",
          expirationRequired: "カスタム有効期限を入力してください",
          invalidExpiration: "無効な有効期限",
          createFailed: "キーの作成に失敗しました",
        },
      },

      // 编辑密钥模态框
      editModal: {
        title: "APIキーを編集",
        tabs: {
          basic: "基本情報",
          path: "パス選択",
        },
        keyName: "キー名",
        keyNamePlaceholder: "キー名を入力",
        keyNameHelp: "APIキーを識別しやすい名前を設定してください",
        expiration: "有効期限",
        expirationOptions: {
          "1d": "1日",
          "7d": "7日",
          "30d": "30日",
          never: "無期限",
          custom: "カスタム",
        },
        customExpiration: "カスタム有効期限",
        customExpirationPlaceholder: "日数を入力",
        permissions: "権限設定",
        permissions: {
          text: "テキスト権限",
          file: "ファイル権限",
          mount: "マウント権限",
        },
        textPermission: "テキスト権限",
        filePermission: "ファイル権限",
        mountPermission: "マウント権限",
        basicPath: "ベースパス",
        basicPathPlaceholder: "/",
        basicPathHelp: "APIキーがアクセス可能なベースパスを設定（デフォルトはルートパス）",
        selectPath: "パスを選択",
        securityTip: "セキュリティヒント",
        securityMessage: "APIキーは慎重に保管し、公共の場や安全でない環境で使用しないでください。",
        pathSelector: {
          title: "ベースパスを選択",
          rootDirectory: "ルートディレクトリ",
          selectDirectory: "ディレクトリを選択",
          currentPath: "現在の選択",
          confirm: "パスを確定",
          cancel: "キャンセル",
          loading: "読み込み中...",
          loadError: "読み込み失敗",
          noDirectories: "このディレクトリにサブディレクトリがありません",
        },
        update: "更新",
        updating: "更新中...",
        processing: "処理中...",
        cancel: "キャンセル",

        // 错误消息
        errors: {
          nameRequired: "キー名は必須です",
          expirationRequired: "カスタム有効期限を入力してください",
          invalidExpiration: "無効な有効期限",
          updateFailed: "キーの更新に失敗しました",
        },
      },

      // 成功消息
      success: {
        created: "APIキーの作成に成功しました",
        createdAndCopied: "キーが作成され、クリップボードにコピーされました",
        updated: "APIキーの更新に成功しました",
        deleted: "APIキーの削除に成功しました",
        bulkDeleted: "一括削除が成功しました。削除数: {count}",
        copied: "キーがクリップボードにコピーされました",
      },

      // 错误消息
      error: {
        cannotLoadList: "キーリストを読み込めません",
        loadFailed: "APIキーの読み込みに失敗しました",
        copyFailed: "クリップボードへのコピーに失敗しました",
        deleteFailed: "キーの削除に失敗しました",
        bulkDeleteFailed: "一括削除に失敗しました",
        noKeysSelected: "削除するキーを選択してください",
      },

      // 确认对话框
      confirmDelete: 'キー "{name}" を削除してもよろしいですか？この操作は元に戻せません。',
      confirmBulkDelete: "選択した {count} 個のキーを削除してもよろしいですか？この操作は元に戻せません。",
      selectKeysFirst: "まず削除するキーを選択してください",
      bulkDeleteConfirm: "選択した {count} 個のキーを削除してもよろしいですか？この操作は元に戻せません。",
    },

    // 挂载管理
    mount: {
      // 页面标题和操作
      title: "マウント管理",
      accessibleMounts: "アクセス可能なマウントポイント",
      createMount: "新しいマウントポイントを作成",
      editMount: "マウントポイントを編集",
      refresh: "更新",
      refreshing: "更新中...",
      search: "マウントポイントを検索...",

      // 挂载点状态
      status: {
        active: "有効",
        inactive: "無効",
        enabled: "有効",
        disabled: "無効",
      },

      // 挂载点信息
      info: {
        name: "マウントポイント名",
        path: "マウントパス",
        storageType: "ストレージタイプ",
        storageConfig: "ストレージ設定",
        remark: "備考",
        sortOrder: "表示順",
        cacheTtl: "キャッシュ時間",
        createdBy: "作成者",
        createdAt: "作成日時",
        updatedAt: "更新日時",
        lastRefresh: "最終更新",
      },

      // 表单字段
      form: {
        name: "マウントポイント名",
        namePlaceholder: "マウントポイント名を入力",
        nameHint: "マウントポイントを識別する名前",

        storageType: "ストレージタイプ",
        storageTypeHint: "ストレージバックエンドのタイプを選択",

        storageConfig: "ストレージ設定",
        storageConfigPlaceholder: "ストレージ設定を選択",
        storageConfigHint: "使用するS3ストレージ設定を選択",

        mountPath: "マウントパス",
        mountPathPlaceholder: "マウントパスを入力",
        mountPathHint: "ストレージ内のパス（空欄はルートディレクトリを意味）",

        remark: "備考",
        remarkPlaceholder: "備考を入力",
        remarkHint: "オプションの説明情報",

        sortOrder: "表示順",
        sortOrderHint: "数字が小さいほど上位に表示",

        cacheTtl: "キャッシュ時間(秒)",
        cacheTtlHint: "ファイルリストのキャッシュ時間（0はキャッシュなし）",

        isActive: "有効状態",
        isActiveHint: "このマウントポイントを有効にするかどうか",

        // S3配置相关
        s3Config: "S3ストレージ設定",
        selectS3Config: "S3ストレージ設定を選択",
        noS3Config: "利用可能なS3ストレージ設定がありません",

        // 存储类型选项
        storageTypes: {
          s3: "S3ストレージ",
        },

        // 占位符
        cacheTtlPlaceholder: "デフォルト300秒",
        sortOrderPlaceholder: "0",

        // 按钮
        save: "保存",
        saving: "保存中...",
        cancel: "キャンセル",
        create: "作成",
        creating: "作成中...",
        update: "更新",
        updating: "更新中...",
      },

      // 操作按钮
      actions: {
        edit: "編集",
        delete: "削除",
        enable: "有効化",
        disable: "無効化",
        view: "表示",
        browse: "参照",
      },

      // 确认对话框
      confirmDelete: {
        title: "削除の確認",
        message: 'マウントポイント "{name}" を削除してもよろしいですか？この操作は元に戻せません。',
        confirm: "削除",
        cancel: "キャンセル",
      },

      // 成功消息
      success: {
        created: "マウントポイントの作成に成功しました",
        updated: "マウントポイントの更新に成功しました",
        deleted: "マウントポイントの削除に成功しました",
        enabled: "マウントポイントの有効化に成功しました",
        disabled: "マウントポイントの無効化に成功しました",
        refreshed: "データの更新に成功しました",
      },

      // 错误消息
      error: {
        loadFailed: "マウントポイントリストの読み込みに失敗しました",
        createFailed: "マウントポイントの作成に失敗しました",
        updateFailed: "マウントポイントの更新に失敗しました",
        deleteFailed: "マウントポイントの削除に失敗しました",
        enableFailed: "マウントポイントの有効化に失敗しました",
        disableFailed: "マウントポイントの無効化に失敗しました",
        loadS3ConfigsFailed: "S3設定の読み込みに失敗しました",
        loadApiKeysFailed: "APIキーリストの読み込みに失敗しました",
        noPermission: "この操作を実行する権限がありません",
        apiKeyNoPermission: "APIキーユーザーはマウントポイント状態を変更する権限がありません",
        apiKeyCannotDelete: "APIキーユーザーはマウントポイントを削除する権限がありません",
        apiKeyCannotCreate: "APIキーユーザーはマウントポイントを作成する権限がありません",
        apiKeyCannotManage: "APIキーユーザーはマウントポイントを管理する権限がありません",
        saveFailed: "保存に失敗しました",
      },

      // 验证错误
      validation: {
        nameRequired: "マウントポイント名は必須です",
        nameMinLength: "マウントポイント名は2文字以上必要です",
        nameMaxLength: "マウントポイント名は50文字以内で入力してください",
        storageConfigRequired: "ストレージ設定を選択してください",
        mountPathInvalid: "マウントパスの形式が不正です",
        sortOrderInvalid: "表示順は非負の整数で入力してください",
        cacheTtlInvalid: "キャッシュ時間は非負の整数で入力してください",
      },

      // 空状态
      empty: {
        title: "マウントポイントがありません",
        description: "まだマウントポイントが作成されていません",
        createFirst: "最初のマウントポイントを作成",
      },

      // 搜索结果
      searchResults: {
        noResults: "一致するマウントポイントが見つかりませんでした",
        found: "{count} 件のマウントポイントが見つかりました",
        clearSearch: "検索をクリア",
        tryDifferentTerms: "別の検索条件をお試しください",
      },

      // 创建者类型
      creators: {
        system: "システム",
        admin: "管理者",
        apiKey: "キー",
      },

      // 其他
      currentApiKey: "現在のキー",
      unknownCreator: "作成者不明",
      noRemark: "備考なし",
      unlimited: "無制限",
      seconds: "秒",
    },
  },

  // 仪表板
  dashboard: {
    // 页面标题和操作
    systemOverview: "システム概要",
    refresh: "更新",
    refreshing: "更新中...",

    // 统计卡片
    totalPastes: "テキスト共有",
    totalFiles: "ファイルアップロード",
    totalApiKeys: "APIキー",
    totalS3Configs: "ストレージ設定",

    // 存储相关
    storageUsage: "ストレージ使用状況",
    allBuckets: "全ストレージバケット",
    usedStorage: "使用済み",
    totalStorage: "総容量",
    usagePercent: "使用率",
    selectBucket: "バケットを選択",

    // 活动统计
    activityOverview: "アクティビティ概要",
    weeklyActivity: "直近7日間のアクティビティ",
    totalWeekPastes: "今週のテキスト",
    totalWeekFiles: "今週のファイル",
    weeklyPastes: "今週のテキスト",
    weeklyFiles: "今週のファイル",
    mostActiveDate: "最も活発な日",
    highestDailyActivity: "1日最大アクティビティ",
    items: "件",

    // 存储桶分布
    storageBucketDistribution: "ストレージバケット分布",
    otherStorage: "その他のストレージ",

    // 图表切换
    switchToLineChart: "折れ線グラフに切り替え",
    switchToBarChart: "棒グラフに切り替え",

    // 系统信息
    serverEnvironment: "サーバー環境",
    dataStorage: "データストレージ",

    // 图表相关
    chartType: "グラフタイプ",
    barChart: "棒グラフ",
    lineChart: "折れ線グラフ",
    toggleChart: "グラフタイプを切り替え",

    // 错误和状态
    fetchError: "データの取得に失敗しました。後ほど再試行してください",
    loadingData: "データを読み込み中...",
    noData: "データがありません",

    // 时间相关
    lastUpdated: "最終更新",

    // 存储单位
    storageUnits: {
      bytes: "バイト",
      kb: "KB",
      mb: "MB",
      gb: "GB",
      tb: "TB",
    },
  },

// マウントエクスプローラー
  mount: {
    title: "マウントエクスプローラー",
    permissionRequired: "マウントエクスプローラーにアクセスするには管理者権限または有効なAPIキーが必要です。",
    loginAuth: "管理パネルにログインするかAPIキーを設定してください",
    cancel: "キャンセル",
    backToFileList: "ファイルリストに戻る",

    // 権限通知
    noPermissionForPath: "このディレクトリの内容にアクセスする権限がありません。{path} とそのサブディレクトリのみアクセス可能です。",

    // 一括削除ダイアログ
    batchDelete: {
      title: "一括削除の確認",
      message: "選択した {count} 個の項目を削除してもよろしいですか？この操作は元に戻せません。",
      selectedItems: "選択した項目:",
      folder: "(フォルダ)",
      moreItems: "... 他 {count} 項目",
      confirmButton: "削除",
      cancelButton: "キャンセル",
    },

    // ファイル操作
    operations: {
      upload: "アップロード",
      createFolder: "新規フォルダ作成",
      refresh: "更新",
      viewMode: "表示モード",
      batchOperations: "一括操作",
      tasks: "タスク管理",
    },

    // 新規フォルダダイアログ
    createFolder: {
      enterName: "フォルダ名を入力してください",
      folderName: "フォルダ名",
      placeholder: "新規フォルダ",
      cancel: "キャンセル",
      create: "作成",
    },

    // 表示モード
    viewModes: {
      list: "リスト表示",
      grid: "グリッド表示",
    },

    // ファイルリスト
    fileList: {
      loading: "読み込み中...",
      empty: "このディレクトリは空です",
      noMountPoints: "利用可能なマウントポイントがありません",
      name: "名前",
      size: "サイズ",
      modifiedTime: "更新日時",
      type: "種類",
      actions: "操作",
      selectAll: "全選択",
      deselectAll: "選択解除",
    },

    // 名前変更ダイアログ
    rename: {
      title: "名前変更",
      enterNewName: "新しい名前を入力してください",
      newName: "新しい名前",
      cancel: "キャンセル",
      confirm: "確認",
    },

    // 削除確認ダイアログ
    delete: {
      title: "削除の確認",
      message: "{type} {name} を削除してもよろしいですか？",
      folderWarning: "この操作によりフォルダとその内容すべてが削除されます。",
      cancel: "キャンセル",
      confirm: "削除",
    },

    // 操作メッセージ
    messages: {
      apiKeyInfoUpdated: "APIキー情報を更新しました",
      refreshSuccess: "更新成功",
      refreshFailed: "更新失敗、再試行してください",
      getDirectoryContentFailed: "ディレクトリ内容の取得に失敗: {message}",
      getDirectoryContentFailedUnknown: "ディレクトリ内容の取得に失敗: {message}",
      fileUploadSuccess: "ファイルアップロード成功",
      fileUploadFailed: "ファイルアップロード失敗: {message}",
      fileUploadFailedUnknown: "ファイルアップロード失敗: {message}",
      uploadCancelling: "アップロードをキャンセル中...",
      folderCreateSuccess: "フォルダ作成成功",
      folderCreateFailed: "フォルダ作成失敗: {message}",
      folderCreateFailedUnknown: "フォルダ作成失敗: {message}",
      renameSuccess: "{type}の名前変更に成功",
      renameFailed: "名前変更失敗: {message}",
      renameFailedUnknown: "名前変更失敗: {message}",
      deleteSuccess: "{type}削除成功",
      deleteFailed: "削除失敗: {message}",
      deleteFailedUnknown: "削除失敗: {message}",
      downloadPreparing: "ダウンロード準備中...",
      downloadSuccess: "ファイルダウンロード成功",
      downloadFailed: "ファイルダウンロード失敗: {message}",
      downloadFailedUnknown: "ファイルダウンロード失敗: {message}",
      previewLoadFailed: "ファイルプレビューの読み込み失敗: {message}",
      previewLoadFailedUnknown: "ファイルプレビューの読み込み失敗: {message}",
      previewError: "ファイルプレビューの読み込みに失敗しました",
      uploadError: "アップロード失敗: {message}",
      uploadErrorUnknown: "アップロード失敗: {message}",
      batchDeleteInProgress: "選択項目を削除中...",
      batchDeletePartialSuccess: "部分的な削除成功、{success}個成功、{failed}個失敗",
      batchDeleteSuccess: "{count}個の項目を削除しました",
      batchDeleteFailed: "一括削除失敗: {message}",
      batchDeleteFailedUnknown: "一括削除失敗: {message}",
      copySuccess: "{message}",
      copyFailed: "コピー失敗: {message}",
    },

    // ファイルプレビュー
    filePreview: {
      downloadFile: "ファイルをダウンロード",
      directPreview: "直接プレビュー",
      generating: "生成中...",
      fileSize: "ファイルサイズ:",
      modifiedTime: "更新日時:",
      fileType: "ファイルタイプ:",
      unknown: "不明",
      editMode: "編集モード",
      previewMode: "プレビューモード",
      saving: "保存中...",
      save: "保存",
      cancel: "キャンセル",
      language: "言語:",
      autoDetect: "自動検出",
      configFile: "設定ファイル",
      loadingPreview: "Officeプレビューを読み込み中...",
      previewError: "ファイルプレビューの読み込みに失敗",
      retryLoad: "再読み込みするかファイルをダウンロードして確認してください",
      retry: "再試行",
      cannotPreview: "ファイルをプレビューできません",
      downloadToView: "このファイル形式はオンラインプレビューに対応していません。ダウンロードボタンをクリックして確認してください",
      wordPreview: "Word文書プレビュー",
      excelPreview: "Excel表プレビュー",
      powerpointPreview: "PowerPointプレゼンテーションプレビュー",
      exitFullscreen: "全画面表示を終了",
      fullscreen: "全画面表示",
      useMicrosoftPreview: "Microsoftプレビューを使用",
      useGooglePreview: "Googleプレビューを使用",
      htmlPreview: "HTMLプレビュー",
      browserNotSupport: "お使いのブラウザは対応していません",
      videoTag: "動画タグ",
      audioTag: "音声タグ",
    },

    // アップロードモーダル
    uploadModal: {
      title: "ファイルをアップロード",
      uploadMethod: "アップロード方法:",
      presignedUpload: "プリサイン直アップロード",
      recommended: "推奨",
      directUpload: "直接アップロード",
      multipartUpload: "マルチパートアップロード",
      directMode: "ダイレクトモード",
      presignedMode: "直アップロードモード",
      multipartMode: "マルチパートモード",
      directModeDesc: "サーバー経由で直接アップロード（進捗表示なし、小ファイル向け）",
      presignedModeDesc: "ストレージサーバーに直接アップロード（Worker CPU制限回避、高速）",
      multipartModeDesc: "サーバー経由で分割アップロード（大ファイル/不安定なネットワーク環境向け）",
      dragDropHere: "ファイルをここにドラッグ＆ドロップ",
      clickOrDragToUpload: "クリックまたはファイルをドラッグしてアップロード",
      multiFileSupport: "複数ファイルアップロード対応",
      pasteSupport: "Ctrl+V でファイル貼り付け対応",
      selectedFiles: "{count} ファイル選択済み",
      clearAll: "すべてクリア",
      totalProgress: "全体進捗",
      uploadSpeed: "アップロード速度:",
      uploading: "アップロード中 {current}/{total}: {fileName}",
      cancel: "キャンセル",
      cancelUpload: "アップロードをキャンセル",
      startUpload: "アップロード開始",
      fileStatus: {
        pending: "保留中",
        uploading: "{progress}%",
        success: "アップロード成功",
        error: "アップロード失敗",
      },
      cancelSingleUpload: "アップロードをキャンセル",
      retryUpload: "再試行",
      removeFile: "削除",
      pasteFileAdded: "クリップボードからファイルを追加しました",
      confirmCancelUpload: "ファイルをアップロード中ですが、キャンセルして閉じますか？",
      confirmClearFiles: "すべてのファイルをクリアしますか？",
      noFilesSelected: "アップロードするファイルを選択してください",
      uploadStarted: "ファイルアップロードを開始...",
      allFilesUploaded: "すべてのファイルアップロード完了！",
      someFilesFailed: "一部のファイルアップロードに失敗、エラーを確認してください",
      uploadCancelled: "アップロードがキャンセルされました",
      noFilesToUpload: "アップロード対象ファイルがありません",
      allFilesUploadFailed: "すべてのファイルアップロードに失敗",
      checkFilesValid: "、ファイルが有効か確認してください",
      partialUploadSuccess: "{success}ファイル成功、{failed}ファイル失敗",
      allFilesUploadSuccess: "{count}ファイルのアップロードに成功",
      cancelUploadError: "アップロードキャンセル失敗: {message}",
      allUploadsCancelled: "すべてのファイルアップロードをキャンセルしました",
      retryUploadSuccess: "ファイル {fileName} の再アップロード成功",
      retryUploadFailed: "ファイル {fileName} の再アップロード失敗: {message}",
      retryUploadError: "ファイル {fileName} の再アップロードエラー: {message}",
    },

    // タスク管理
    taskManager: {
      title: "タスク管理",
      noTasks: "タスクがありません",
      noTasksDescription: "現在実行中または完了したタスクはありません",
      activeTasks: "実行中タスク ({count})",
      completedTasks: "完了済みタスク ({count})",
      clearCompleted: "完了タスクをクリア",
      cancel: "キャンセル",
      retry: "再試行",
      details: "詳細",
      hideDetails: "詳細を非表示",

      // タスクステータス
      status: {
        pending: "保留中",
        running: "実行中",
        completed: "完了",
        failed: "失敗",
        cancelled: "キャンセル済み",
      },

      // タスクタイプ
      types: {
        copy: "コピー",
        upload: "アップロード",
        delete: "削除",
        download: "ダウンロード",
      },

      // タスク詳細
      progress: "進捗: {current}/{total}",
      timeElapsed: "経過時間: {time}",
      createdAt: "作成日時: {time}",
      updatedAt: "更新日時: {time}",
      error: "エラー: {message}",

      // タスク操作確認
      confirmCancel: "このタスクをキャンセルしますか？",
      confirmClearCompleted: "完了したすべてのタスクをクリアしますか？",

      // タスク段階
      downloading: "ダウンロード中",
      uploading: "アップロード中",
      processing: "処理中",
      currentFile: "現在のファイル: {fileName}",
      processed: "処理済み: {current}/{total}",
      completedAt: "完了日時: {time}",
      processedItems: "処理項目: {current}/{total}",

      // 統計情報
      success: "成功: {count}",
      skipped: "スキップ: {count}",
      failed: "失敗: {count}",
      partialComplete: "部分完了",

      // タスクタイプ名
      copyTask: "コピータスク",
      uploadTask: "アップロードタスク",
      deleteTask: "削除タスク",
      downloadTask: "ダウンロードタスク",
      unknownTask: "不明なタスク",

      // ステータステキスト
      waiting: "待機中",
      unknown: "不明",

      // タスク作成・開始メッセージ
      copyTaskName: "{count}項目を {path} にコピー",
      copyStarted: "{count}項目を {path} にコピー中、タスク管理で進捗を確認できます",
    },

    // その他メッセージ
    linkCopied: "ファイル直リンクをクリップボードにコピーしました",

    // ファイル項目操作
    fileItem: {
      download: "ダウンロード",
      getLink: "直リンクを取得",
      rename: "名前変更",
      delete: "削除",
      preview: "プレビュー",
      copy: "コピー",
      move: "移動",
      properties: "プロパティ",
    },

    // ファイルタイプ
    fileTypes: {
      folder: "フォルダ",
      file: "ファイル",
      image: "画像",
      video: "動画",
      audio: "音声",
      document: "文書",
      archive: "アーカイブ",
      code: "コード",
      unknown: "不明なタイプ",
    },

    // ファイルサイズ単位
    sizeUnits: {
      bytes: "バイト",
      kb: "KB",
      mb: "MB",
      gb: "GB",
      tb: "TB",
    },
  },

// 言語選択
  language: {
    toggle: "言語切替",
    zh: "中国語",
    en: "英語",
    ja: "日本語",
  },

  // Markdownエディターモジュール
  markdown: {
    // メインエディター
    title: "Markdownエディター",
    switchToMarkdown: "Markdownに切り替え",
    switchToPlainText: "プレーンテキストに切り替え",

    // 権限管理
    permissionRequired: "共有を作成するには管理者権限または有効なAPIキーが必要です、",
    loginOrAuth: "管理バックエンドにログインするかAPIキーを設定してください",

    // エディターフォーム
    form: {
      remark: "備考",
      remarkPlaceholder: "この共有に備考を追加（オプション）",
      customLink: "カスタムリンクサフィックス",
      customLinkPlaceholder: "カスタムリンクサフィックス（オプション）",
      password: "アクセスパスワード",
      passwordPlaceholder: "アクセスパスワードを設定（オプション）",
      expiryTime: "有効期限",
      expiryNever: "無期限",
      expiryHour: "時間後に期限切れ",
      expiryDay: "日後に期限切れ",
      expiryWeek: "週後に期限切れ",
      expiryMonth: "月後に期限切れ",
      maxViews: "最大閲覧回数",
      maxViewsPlaceholder: "閲覧回数を制限（0は無制限）",
      createShare: "共有を作成",
      creating: "作成中...",
    },

    // 共有リンク
    shareLink: "共有リンク:",
    copyLink: "リンクをコピー",
    copyRawLink: "元のテキスト直リンクをコピー",
    showQRCode: "QRコードを表示",
    linkCopied: "リンクがクリップボードにコピーされました",
    rawLinkCopied: "元のテキスト直リンクがクリップボードにコピーされました",
    copyFailed: "コピー失敗、手動でコピーしてください",
    linkExpireIn: "リンクは {seconds} 秒後に非表示になります",

    // QRコードポップアップ
    qrCodeTitle: "共有QRコード",
    qrCodeGenerating: "生成中...",
    qrCodeScanToAccess: "QRコードをスキャンして共有内容にアクセス",
    downloadQRCode: "QRコードをダウンロード",
    qrCodeDownloaded: "QRコードがダウンロードされました",

    // コピー形式メニュー
    copyFormats: "コピー形式",
    copyAsMarkdown: "Markdown形式でコピー",
    copyAsHTML: "HTML形式でコピー",
    copyAsPlainText: "プレーンテキスト形式でコピー",
    exportAsWord: "Word文書としてエクスポート",
    exportAsPng: "PNG画像としてエクスポート",
    exportDocumentTitle: "Markdownエクスポート文書",
    markdownCopied: "Markdown形式でコピーされました",
    htmlCopied: "HTML形式でコピーされました",
    plainTextCopied: "プレーンテキスト形式でコピーされました",

    // エディター関連
    editorPlaceholder: "ここにMarkdown内容を入力...",
    plainTextPlaceholder: "ここにプレーンテキスト内容を入力...",

    // エディターツールバー
    toolbar: {
      importFile: "ファイルをインポート",
      clearContent: "内容をクリア",
      copyFormats: "コピー形式",
    },

    // ステータスメッセージ
    messages: {
      noPermission: "共有を作成する権限がありません",
      contentEmpty: "内容は必須です",
      creating: "共有を作成中...",
      createSuccess: "共有が正常に作成されました！",
      createFailed: "保存に失敗しました",
      linkOccupied: "リンクサフィックスは既に使用されています、別のものを使用してください",
      permissionDenied: "権限が不足しており、共有を作成できません",
      contentTooLarge: "内容が大きすぎます、長さを減らしてください",
      unknownError: "不明なエラー",
      editorNotReady: "エディターの準備ができていません",
      autoSaveFailed: "自動保存に失敗しました",
      restoreContentFailed: "内容の復元に失敗しました",
      qrCodeGenerateFailed: "QRコードの生成に失敗しました",
      confirmClearContent: "すべての内容をクリアしますか？",
      generatingWord: "Word文書を生成中...",
      wordExported: "Word文書が生成されダウンロードされました",
      wordExportFailed: "エクスポートに失敗しました、後で再試行してください",
      exportingPng: "PNG画像をエクスポート中...",
      pngExported: "PNG画像がエクスポートされダウンロードされました",
      pngExportFailed: "PNGエクスポートに失敗しました、後で再試行してください",
      corsImageError: "クロスドメイン制限により、エクスポート画像に一部の画像が正しく表示されない場合があります",
    },

    // フォーム検証
    validation: {
      slugInvalid: "リンクサフィックスは英数字、ハイフン、アンダースコアのみ使用可能",
      slugTooLong: "リンクサフィックスは50文字以内",
      slugReserved: "このリンクサフィックスはシステム予約済みです、別のものを使用してください",
    },
  },

  // ファイルアップロードモジュール
  file: {
    // ページタイトルとナビゲーション
    uploadPageTitle: "ファイルアップロード",

    // 権限管理
    permissionRequired: "ファイルをアップロードするには管理者権限または有効なAPIキーが必要です、",
    loginOrAuth: "管理バックエンドにログインするかAPIキーを設定してください",

    // ファイルアップローダー
    uploadTabs: {
      fileUpload: "ファイルアップロード",
      urlUpload: "URL直リンクアップロード",
    },

    // ドラッグ＆ドロップエリア
    dragDropTitle: "ファイルをここにドラッグするかクリックして選択",
    dragDropSubtitle: "複数ファイルアップロード対応",
    dragDropHint: "最大ファイルサイズ: {size}",
    selectFiles: "ファイルを選択",
    drag: "ファイルをここにドラッグ",
    select: "ファイルをここにドラッグするかクリックして選択",
    maxSizeExceeded: "最大ファイルサイズ: {size}",
    multipleFilesSupported: "複数ファイルアップロード対応",

    // ファイル選択と管理
    selectedFiles: "{count} ファイル選択済み",
    clearAll: "すべてクリア",
    pending: "保留中",
    success: "成功",
    error: "失敗",
    retry: "再試行",
    clearSelected: "削除",
    cancelUpload: "アップロードをキャンセル",

    // ファイル情報
    fileName: "ファイル名",
    fileSize: "サイズ",
    fileType: "種類",
    password: "パスワード",
    createdAt: "作成日時",
    actions: "操作",
    remainingViewsLabel: "残り閲覧回数",
    unlimited: "無制限",
    usedUp: "使用済み",
    unknownSize: "不明なサイズ",

    // フォームフィールド
    form: {
      s3Config: "ストレージ設定",
      selectS3Config: "ストレージ設定を選択",
      customSlug: "カスタムリンク",
      customSlugPlaceholder: "カスタムファイルアクセスリンク（オプション）",
      path: "保存パス",
      pathPlaceholder: "ファイル保存パス（オプション）",
      remark: "備考",
      remarkPlaceholder: "ファイルに備考を追加（オプション）",
      password: "アクセスパスワード",
      passwordPlaceholder: "アクセスパスワードを設定（オプション）",
      expiryTime: "有効期限",
      expiryNever: "無期限",
      expiryHour: "時間後に期限切れ",
      expiryDay: "日後に期限切れ",
      expiryWeek: "週後に期限切れ",
      expiryMonth: "月後に期限切れ",
      maxViews: "最大閲覧回数",
      maxViewsPlaceholder: "閲覧回数を制限（0は無制限）",
      uploadButton: "アップロード開始",
      uploading: "アップロード中...",
      cancelUpload: "アップロードをキャンセル",
    },

    // ストレージと設定
    storage: "ストレージ設定",
    selectStorage: "ストレージ設定を選択",
    noStorage: "利用可能なストレージ設定がありません",
    path: "保存パス",
    pathPlaceholder: "ファイル保存パス（オプション）",
    shareSettings: "共有設定",
    remark: "備考",
    remarkPlaceholder: "ファイルに備考を追加（オプション）",
    customLink: "カスタムリンク",
    customLinkPlaceholder: "カスタムファイルアクセスリンク（オプション）",
    passwordProtection: "パスワード保護",
    passwordPlaceholder: "アクセスパスワードを設定（オプション）",
    expireTime: "有効期限",
    maxViews: "最大閲覧回数",
    maxViewsPlaceholder: "閲覧回数を制限（0は無制限）",
    onlyAllowedChars: "英数字、ハイフン、アンダースコアのみ使用可能",

    // 有効期限オプション
    expireOptions: {
      hour1: "1時間後に期限切れ",
      day1: "1日後に期限切れ",
      day7: "7日後に期限切れ",
      day30: "30日後に期限切れ",
      never: "無期限",
    },

    // ボタンと操作
    upload: "アップロード開始",
    loading: "アップロード中...",
    cancel: "キャンセル",

    // URLアップロード
    urlUpload: {
      urlInput: "ファイルURL",
      urlInputPlaceholder: "アップロードするファイルのURLを入力",
      analyzeUrl: "URLを分析",
      analyzing: "分析中...",
      customFilename: "カスタムファイル名",
      customFilenamePlaceholder: "カスタムファイル名（オプション）",
      filePreview: "ファイルプレビュー",
      uploadFromUrl: "URLからアップロード",
      urlUpload: "URLアップロード",
      urlAnalysisComplete: "URL分析完了",
      retryAnalysis: "再分析",
    },

    // URLアップロードインターフェース
    enterUrl: "ファイルURLを入力",
    supportedUrlTypes: "HTTPおよびHTTPSリンク対応",
    urlPlaceholder: "アップロードするファイルのURLを入力",
    analyze: "分析",
    analyzing: "分析中...",
    urlFileInfo: "ファイル情報",
    clear: "クリア",
    customFileName: "カスタムファイル名",
    customFilename: "カスタムファイル名（オプション）",

    // アップロード方法
    uploadMethod: "アップロード方法",
    presignedUpload: "プリサインアップロード",
    multipartUpload: "マルチパートアップロード",
    presignedUploadDesc: "プリサインURLでストレージに直接アップロード",
    multipartUploadDesc: "マルチパートでストレージに直接アップロード",

    // アップロード段階
    starting: "準備中...",
    downloading: "ダウンロード中...",
    downloadingProxy: "プロキシダウンロード中...",
    preparing: "準備中...",
    initializing: "初期化中...",
    uploading: "アップロード中...",
    finalizing: "最終処理中...",
    completed: "完了",
    cancelled: "キャンセル済み",

    // ファイルリスト
    recentUploads: "最近のアップロード",
    showingRecent: "最近の3件を表示",
    noFiles: "ファイルがありません",
    noFilesUploaded: "アップロードされたファイルがありません",
    uploadToShow: "ファイルをアップロードするとここに表示されます",
    loading: "読み込み中...",

    // ファイル操作
    open: "開く",
    delete: "削除",
    qrCode: "QRコード",
    encrypted: "暗号化済み",
    noPassword: "パスワードなし",
    fileQrCode: "ファイルQRコード",
    deleting: "削除中...",
    confirmDeleteBtn: "削除を確認",
    deletedSuccess: "ファイルの削除に成功",
    qrCodeDownloadSuccess: "QRコードのダウンロードに成功",
    noValidLink: "有効なリンクがありません",
    cannotGetProxyLink: "プロキシリンクを取得できません",
    copyPermanentLinkFailed: "永久リンクのコピーに失敗",
    getPasswordFromSessionError: "セッションストレージからパスワードを取得できませんでした",

    // ファイル操作
    copyLink: "リンクをコピー",
    copyDirectLink: "直リンクをコピー",
    downloadFile: "ファイルをダウンロード",
    deleteFile: "ファイルを削除",
    showQRCode: "QRコードを表示",
    downloadQrCode: "QRコードをダウンロード",

    // ステータスメッセージ
    uploadSuccessful: "ファイルのアップロードに成功",
    urlUploadSuccess: "URLからのファイルアップロードに成功",
    multipleUploadsSuccessful: "{count} ファイルのアップロードに成功",
    retrySuccessful: "再アップロードに成功",
    allSlugConflicts: "すべてのファイルのリンクサフィックスが既に使用されています",
    allPermissionErrors: "このストレージ設定を使用する権限がありません",
    allUploadsFailed: "すべてのファイルアップロードが失敗しました",
    someSlugConflicts: "{count} ファイルのリンクサフィックスが既に使用されています",
    someUploadsFailed: "{count} ファイルのアップロードが失敗しました",
    singleFileCancelMessage: "ファイルのアップロードがキャンセルされました",
    insufficientStorageDetailed: "ストレージ容量不足：ファイルサイズ({fileSize})が残容量({remainingSpace})を超過、総容量制限{totalCapacity}",
    linkCopied: "リンクがクリップボードにコピーされました",
    directLinkCopied: "直リンクがクリップボードにコピーされました",
    copyFailed: "コピーに失敗、手動でコピーしてください",
    qrCodeDownloaded: "QRコードがダウンロードされました",

    // エラーメッセージ
    messages: {
      noS3Config: "ストレージ設定を選択してください",
      noFilesSelected: "アップロードするファイルを選択してください",
      fileTooLarge: "ファイルサイズが制限を超えています",
      uploadFailed: "アップロードに失敗しました",
      uploadCancelled: "アップロードがキャンセルされました",
      deleteFailed: "削除に失敗しました",
      getFileDetailFailed: "ファイル詳細の取得に失敗しました",
      cannotGetDirectLink: "直リンクを取得できません、後で再試行してください",
      invalidUrl: "有効なURLを入力してください",
      urlAnalysisFailed: "URL分析に失敗しました",
      negativeMaxViews: "最大閲覧回数は負の値にできません",
      getPresignedUrlFailed: "プリサインURLの取得に失敗しました",
      slugInvalid: "カスタムリンクは英数字、ハイフン、アンダースコアのみ使用可能",
      slugTooLong: "カスタムリンクは50文字以内",
      slugReserved: "このリンクはシステム予約済みです、別のものを使用してください",
      slugConflict: "リンクサフィックスが既に使用されています、別のものを使用してください",
      permissionError: "このストレージ設定を使用する権限がありません",
      initMultipartUploadFailed: "マルチパートアップロードの初期化に失敗しました",
      uploadCancelled: "アップロードがキャンセルされました",
      networkError: "ネットワークエラー、接続を確認してください",
      serverError: "サーバーエラー、後で再試行してください",
      unknownError: "不明なエラー",
    },

    // 確認ダイアログ
    confirmDelete: "削除の確認",
    confirmDeleteMessage: "このファイルを削除してもよろしいですか？この操作は元に戻せません。",
    confirm: "確認",
    cancel: "キャンセル",

    // QRコードポップアップ
    qrCodeTitle: "ファイルQRコード",
    qrCodeGenerating: "生成中...",
    qrCodeScanToAccess: "QRコードをスキャンしてファイルにアクセス",

    // アップロード進捗
    uploadProgress: "アップロード進捗",
    uploadSpeed: "アップロード速度",
    uploadStage: {
      starting: "アップロード準備中...",
      initializing: "初期化中...",
      uploading: "アップロード中...",
      processing: "処理中...",
      completing: "完了処理中...",
      completed: "アップロード完了",
    },
  },
};
